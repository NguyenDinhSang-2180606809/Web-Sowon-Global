// POST /api/ctv-checkin — cộng tác viên chấm công một lượt làm việc, không cần đăng nhập
const { sr, parseBody } = require('./_lib');

const DAY = 864e5, HOUR = 36e5;

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const b = parseBody(req);
    const clean = (v, n) => String(v || '').trim().replace(/\s+/g, ' ').slice(0, n);
    const interpreter_name = clean(b.interpreter_name, 80);
    const customer_name = clean(b.customer_name, 100);
    const language = clean(b.language, 40);
    const phone = String(b.phone || '').replace(/[\s.\-]/g, '');
    const date = String(b.work_date || ''), st = String(b.start_time || ''), et = String(b.end_time || '');

    if (interpreter_name.length < 2) return res.status(400).json({ error: 'Vui lòng nhập tên phiên dịch viên' });
    if (!/^(\+?84|0)\d{9}$/.test(phone)) return res.status(400).json({ error: 'Số điện thoại không hợp lệ' });
    if (customer_name.length < 2) return res.status(400).json({ error: 'Vui lòng nhập tên khách hàng' });
    if (language.length < 2) return res.status(400).json({ error: 'Vui lòng nhập ngôn ngữ' });
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(st) || !/^\d{2}:\d{2}$/.test(et)) {
      return res.status(400).json({ error: 'Vui lòng nhập ngày và giờ hợp lệ' });
    }

    const start = new Date(`${date}T${st}:00+07:00`);
    let end = new Date(`${date}T${et}:00+07:00`);
    if (isNaN(start) || isNaN(end)) return res.status(400).json({ error: 'Ngày giờ không hợp lệ' });
    if (end.getTime() === start.getTime()) return res.status(400).json({ error: 'Giờ kết thúc phải khác giờ bắt đầu' });
    if (end < start) end = new Date(end.getTime() + DAY); // qua nửa đêm
    if (end - start > 16 * HOUR) return res.status(400).json({ error: 'Một lượt làm việc không được quá 16 giờ' });
    const now = Date.now();
    if (start.getTime() < now - 31 * DAY) return res.status(400).json({ error: 'Chỉ được chấm công trong vòng 31 ngày gần đây' });
    if (start.getTime() > now + DAY) return res.status(400).json({ error: 'Không thể chấm công cho thời điểm trong tương lai' });

    const enc = encodeURIComponent;

    // Chống gửi dồn dập: tối đa 10 lượt trong 10 phút cho cùng số điện thoại
    const since = enc(new Date(now - 10 * 60000).toISOString());
    const recent = await (await sr(`/rest/v1/ctv_attendance?phone=eq.${enc(phone)}&created_at=gte.${since}&select=id&limit=11`)).json();
    if (Array.isArray(recent) && recent.length >= 10) {
      return res.status(429).json({ error: 'Bạn gửi quá nhiều lần, vui lòng thử lại sau ít phút' });
    }

    // Chống trùng / chồng giờ với lượt đã nhập của cùng số điện thoại
    const ov = await (await sr(
      `/rest/v1/ctv_attendance?phone=eq.${enc(phone)}&deleted_at=is.null&start_at=lt.${enc(end.toISOString())}&end_at=gt.${enc(start.toISOString())}&select=id&limit=1`
    )).json();
    if (Array.isArray(ov) && ov.length) {
      return res.status(409).json({ error: 'Khoảng thời gian này bị trùng với một lượt đã chấm công' });
    }

    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || null;
    const ins = await sr('/rest/v1/ctv_attendance', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({
        interpreter_name, phone, customer_name, language,
        start_at: start.toISOString(), end_at: end.toISOString(), ip
      })
    });
    if (!ins.ok) return res.status(500).json({ error: 'Không lưu được dữ liệu, vui lòng thử lại' });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Lỗi máy chủ' });
  }
};
