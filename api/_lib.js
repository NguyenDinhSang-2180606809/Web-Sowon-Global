// Tiện ích dùng chung cho các hàm API (file bắt đầu bằng "_" nên Vercel không coi là endpoint)
const SB_URL = process.env.SUPABASE_URL;
const SB_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Key kiểu mới (sb_secret_...) không phải JWT nên chỉ gửi qua header apikey.
// Key kiểu cũ (service_role, dạng eyJ...) gửi cả apikey lẫn Authorization như trước.
const IS_NEW_KEY = String(SB_SERVICE || '').startsWith('sb_');

function sr(path, opts = {}) {
  const headers = { apikey: SB_SERVICE, 'Content-Type': 'application/json' };
  if (!IS_NEW_KEY) headers.Authorization = 'Bearer ' + SB_SERVICE;
  return fetch(SB_URL + path, { ...opts, headers: { ...headers, ...(opts.headers || {}) } });
}

function parseBody(req) {
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body || '{}'); } catch { return {}; }
  }
  return req.body || {};
}

// Kiểm tra người gọi là admin. Trả về user nếu hợp lệ, ngược lại tự trả lỗi và trả về null.
async function requireAdmin(req, res) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) { res.status(401).json({ error: 'Chưa đăng nhập' }); return null; }
  const r = await fetch(SB_URL + '/auth/v1/user', {
    headers: { apikey: SB_SERVICE, Authorization: 'Bearer ' + token }
  });
  if (!r.ok) { res.status(401).json({ error: 'Phiên đăng nhập không hợp lệ' }); return null; }
  const user = await r.json();
  const p = await sr(`/rest/v1/profiles?id=eq.${user.id}&select=role`);
  const rows = await p.json();
  if (!rows[0] || rows[0].role !== 'admin') { res.status(403).json({ error: 'Không có quyền admin' }); return null; }
  return user;
}

module.exports = { sr, parseBody, requireAdmin, SB_URL };