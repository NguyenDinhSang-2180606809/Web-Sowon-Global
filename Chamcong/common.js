// Hàm dùng chung cho các trang chấm công
const sb = window.supabase.createClient(CC_CONFIG.SUPABASE_URL, CC_CONFIG.SUPABASE_ANON_KEY);
const EMAIL_DOMAIN = '@staff.sowonglobal.local';
const TZ = 'Asia/Ho_Chi_Minh';
const HOUR = 36e5, DAY = 864e5, VN = 7 * HOUR; // Việt Nam UTC+7, không có giờ mùa hè

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function hoursBetween(a, b) { return (new Date(b) - new Date(a)) / HOUR; }
function fmtHours(h) {
  const m = Math.round(h * 60);
  return Math.floor(m / 60) + 'g ' + String(m % 60).padStart(2, '0') + 'p';
}
function money(n) { return Math.round(n).toLocaleString('vi-VN') + ' ₫'; }

// ----- Ngày giờ theo múi giờ Việt Nam -----
function toLocalParts(iso) {
  const s = new Date(new Date(iso).getTime() + VN).toISOString();
  return { date: s.slice(0, 10), time: s.slice(11, 16) };
}
function fmtDate(iso) { const p = toLocalParts(iso).date.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }
function fmtTime(iso) {
  const [h, m] = toLocalParts(iso).time.split(':').map(Number);
  return (h % 12 || 12) + ':' + String(m).padStart(2, '0') + ' ' + (h >= 12 ? 'PM' : 'AM');
}
function fmtEnd(s, e) {
  return fmtTime(e) + (toLocalParts(e).date !== toLocalParts(s).date ? ' (+1 ngày)' : '');
}
function todayLocal() { return toLocalParts(new Date().toISOString()).date; }
function currentMonth() { return todayLocal().slice(0, 7); }
// Trả về [đầu tháng, đầu tháng sau] theo giờ Việt Nam
function monthRange(ym) {
  const [y, m] = ym.split('-').map(Number);
  const ny = m === 12 ? y + 1 : y, nm = m === 12 ? 1 : m + 1;
  return [`${ym}-01T00:00:00+07:00`, `${ny}-${String(nm).padStart(2, '0')}-01T00:00:00+07:00`];
}
// Ghép ngày + giờ bắt đầu + giờ kết thúc. Giờ kết thúc nhỏ hơn giờ bắt đầu = qua nửa đêm (ngày hôm sau).
// Trả về null nếu giờ kết thúc trùng giờ bắt đầu hoặc dữ liệu thiếu.
function buildTimes(date, start, end) {
  if (!date || !start || !end) return null;
  const s = new Date(`${date}T${start}:00+07:00`);
  let e = new Date(`${date}T${end}:00+07:00`);
  if (isNaN(s) || isNaN(e) || e.getTime() === s.getTime()) return null;
  if (e < s) e = new Date(e.getTime() + DAY);
  return [s.toISOString(), e.toISOString()];
}
function usernameToEmail(u) {
  u = u.trim().toLowerCase();
  return u.includes('@') ? u : u + EMAIL_DOMAIN;
}

// ----- Tính lương -----
const DEFAULT_CFG = { standard_hours: 8, ot_multiplier: 1.5, night_allowance: 100000, default_ctv_rate: 0 };

// Số giờ nằm trong khung đêm 22:00 → 06:00 (giờ Việt Nam)
function nightHours(sIso, eIso) {
  const s = new Date(sIso).getTime() + VN, e = new Date(eIso).getTime() + VN;
  let ms = 0;
  for (let k = Math.floor(s / DAY); k <= Math.floor(e / DAY); k++) {
    const b = k * DAY;
    for (const [a, z] of [[b, b + 6 * HOUR], [b + 22 * HOUR, b + DAY]]) {
      ms += Math.max(0, Math.min(e, z) - Math.max(s, a));
    }
  }
  return ms / HOUR;
}

// records: các lượt làm việc của MỘT người trong kỳ lương.
// Giờ làm cộng theo từng ngày (tính theo ngày bắt đầu); phần vượt số giờ chuẩn của ngày là OT.
function calcPay(records, rate, cfg, withNight) {
  const byDay = {};
  let night = 0;
  for (const r of records) {
    const k = Math.floor((new Date(r.start_at).getTime() + VN) / DAY);
    byDay[k] = (byDay[k] || 0) + hoursBetween(r.start_at, r.end_at);
    if (withNight) night += nightHours(r.start_at, r.end_at);
  }
  let reg = 0, ot = 0;
  for (const k in byDay) {
    reg += Math.min(byDay[k], cfg.standard_hours);
    ot += Math.max(byDay[k] - cfg.standard_hours, 0);
  }
  const regPay = reg * rate, otPay = ot * rate * cfg.ot_multiplier, nightPay = night * cfg.night_allowance;
  return { total: reg + ot, reg, ot, night, regPay, otPay, nightPay, amount: regPay + otPay + nightPay };
}
