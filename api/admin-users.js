// /api/admin-users — chỉ admin
//   POST   tạo tài khoản nhân viên
//   PATCH  đổi mật khẩu / tên đăng nhập / họ tên, hoặc {action:'restore'} khôi phục từ thùng rác
//   DELETE chuyển tài khoản vào thùng rác, hoặc {permanent:true} xóa vĩnh viễn (chỉ khi đã ở thùng rác)
// Lịch sử chấm công luôn được giữ lại, vì nó gắn với id tài khoản chứ không gắn với tên đăng nhập.
const { sr, parseBody, requireAdmin } = require('./_lib');

const EMAIL_DOMAIN = '@staff.sowonglobal.local';
const USERNAME_RE = /^[a-z0-9._-]{3,30}$/;
const enc = encodeURIComponent;
const DUP_RE = /already|registered|exists/i;

async function getProfile(id) {
  const r = await sr(`/rest/v1/profiles?id=eq.${enc(id)}&select=id,username,full_name,role,deleted_at`);
  const rows = await r.json();
  return Array.isArray(rows) ? rows[0] || null : null;
}
const patchProfile = (id, body) => sr(`/rest/v1/profiles?id=eq.${enc(id)}`, {
  method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify(body)
});
const putAuth = (id, body) => sr('/auth/v1/admin/users/' + enc(id), { method: 'PUT', body: JSON.stringify(body) });
const usernameTaken = async u => {
  const rows = await (await sr(`/rest/v1/profiles?username=eq.${enc(u)}&select=id&limit=1`)).json();
  return Array.isArray(rows) && rows.length > 0;
};

module.exports = async (req, res) => {
  try {
    const admin = await requireAdmin(req, res);
    if (!admin) return;
    const b = parseBody(req);

    /* ---------- Tạo tài khoản ---------- */
    if (req.method === 'POST') {
      const username = String(b.username || '').trim().toLowerCase();
      const password = String(b.password || '');
      const full_name = String(b.full_name || '').trim();
      const hourly_rate = Number(b.hourly_rate) || 0;
      if (!USERNAME_RE.test(username)) return res.status(400).json({ error: 'Tên đăng nhập 3–30 ký tự: chữ thường không dấu, số, . _ -' });
      if (password.length < 8) return res.status(400).json({ error: 'Mật khẩu tối thiểu 8 ký tự' });
      if (full_name.length < 2) return res.status(400).json({ error: 'Vui lòng nhập họ tên' });
      if (hourly_rate < 0) return res.status(400).json({ error: 'Lương theo giờ không hợp lệ' });
      if (await usernameTaken(username)) {
        return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại (có thể tài khoản đang nằm trong thùng rác)' });
      }

      const created = await sr('/auth/v1/admin/users', {
        method: 'POST',
        body: JSON.stringify({ email: username + EMAIL_DOMAIN, password, email_confirm: true })
      });
      const cj = await created.json();
      if (!created.ok) {
        return res.status(400).json({ error: DUP_RE.test(JSON.stringify(cj)) ? 'Tên đăng nhập đã tồn tại' : (cj.msg || cj.message || 'Không tạo được tài khoản') });
      }
      const prof = await sr('/rest/v1/profiles', {
        method: 'POST',
        body: JSON.stringify({ id: cj.id, username, full_name, role: 'staff', hourly_rate })
      });
      if (!prof.ok) {
        await sr('/auth/v1/admin/users/' + cj.id, { method: 'DELETE' });
        return res.status(400).json({ error: 'Không tạo được hồ sơ nhân viên' });
      }
      return res.status(200).json({ ok: true, id: cj.id });
    }

    /* ---------- Sửa thông tin / khôi phục ---------- */
    if (req.method === 'PATCH') {
      if (!b.id) return res.status(400).json({ error: 'Thiếu id' });
      const p = await getProfile(b.id);
      if (!p) return res.status(404).json({ error: 'Không tìm thấy tài khoản' });

      if (b.action === 'restore') {
        if (!p.deleted_at) return res.status(400).json({ error: 'Tài khoản không nằm trong thùng rác' });
        if (!(await putAuth(p.id, { ban_duration: 'none' })).ok) return res.status(400).json({ error: 'Không khôi phục được tài khoản' });
        if (!(await patchProfile(p.id, { deleted_at: null })).ok) return res.status(500).json({ error: 'Không khôi phục được hồ sơ' });
        return res.status(200).json({ ok: true });
      }

      if (p.deleted_at) return res.status(400).json({ error: 'Hãy khôi phục tài khoản từ thùng rác trước khi sửa' });
      const authPatch = {}, profPatch = {};

      if (b.password !== undefined && b.password !== '') {
        if (String(b.password).length < 8) return res.status(400).json({ error: 'Mật khẩu tối thiểu 8 ký tự' });
        authPatch.password = String(b.password);
      }
      if (b.username !== undefined) {
        const u = String(b.username).trim().toLowerCase();
        if (u !== p.username) {
          if (!USERNAME_RE.test(u)) return res.status(400).json({ error: 'Tên đăng nhập 3–30 ký tự: chữ thường không dấu, số, . _ -' });
          if (await usernameTaken(u)) return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại (có thể tài khoản đang nằm trong thùng rác)' });
          authPatch.email = u + EMAIL_DOMAIN;
          authPatch.email_confirm = true;
          profPatch.username = u;
        }
      }
      if (b.full_name !== undefined) {
        const n = String(b.full_name).trim();
        if (n.length < 2) return res.status(400).json({ error: 'Vui lòng nhập họ tên' });
        if (n !== p.full_name) profPatch.full_name = n;
      }
      if (!Object.keys(authPatch).length && !Object.keys(profPatch).length) {
        return res.status(400).json({ error: 'Không có thay đổi nào' });
      }

      if (Object.keys(authPatch).length) {
        const r = await putAuth(p.id, authPatch);
        if (!r.ok) {
          const j = await r.json().catch(() => ({}));
          return res.status(400).json({ error: DUP_RE.test(JSON.stringify(j)) ? 'Tên đăng nhập đã tồn tại' : 'Không cập nhật được tài khoản' });
        }
      }
      if (Object.keys(profPatch).length) {
        if (!(await patchProfile(p.id, profPatch)).ok) {
          if (authPatch.email) await putAuth(p.id, { email: p.username + EMAIL_DOMAIN });
          return res.status(500).json({ error: 'Không cập nhật được hồ sơ' });
        }
        // Giữ tên hiển thị trong lịch sử chấm công đồng bộ với tên mới
        if (profPatch.full_name) {
          await sr(`/rest/v1/attendance?user_id=eq.${enc(p.id)}`, {
            method: 'PATCH', headers: { Prefer: 'return=minimal' },
            body: JSON.stringify({ staff_name: profPatch.full_name })
          });
        }
      }
      return res.status(200).json({ ok: true });
    }

    /* ---------- Xóa: vào thùng rác / xóa vĩnh viễn ---------- */
    if (req.method === 'DELETE') {
      if (!b.id) return res.status(400).json({ error: 'Thiếu id' });
      const p = await getProfile(b.id);
      if (!p) return res.status(404).json({ error: 'Không tìm thấy tài khoản' });
      if (p.id === admin.id) return res.status(400).json({ error: 'Không thể xóa chính tài khoản đang đăng nhập' });
      if (p.role === 'admin') return res.status(400).json({ error: 'Không thể xóa tài khoản admin' });

      if (b.permanent) {
        if (!p.deleted_at) return res.status(400).json({ error: 'Hãy chuyển tài khoản vào thùng rác trước' });
        // Lưu lại tên để lịch sử chấm công vẫn hiển thị đúng sau khi hồ sơ mất
        await sr(`/rest/v1/attendance?user_id=eq.${enc(p.id)}&staff_name=is.null`, {
          method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ staff_name: p.full_name })
        });
        const r = await sr('/auth/v1/admin/users/' + enc(p.id), { method: 'DELETE' });
        if (!r.ok) return res.status(400).json({ error: 'Không xóa được tài khoản' });
        return res.status(200).json({ ok: true });
      }

      if (p.deleted_at) return res.status(400).json({ error: 'Tài khoản đã nằm trong thùng rác' });
      if (!(await putAuth(p.id, { ban_duration: '876000h' })).ok) return res.status(400).json({ error: 'Không khóa được tài khoản' });
      if (!(await patchProfile(p.id, { deleted_at: new Date().toISOString() })).ok) {
        await putAuth(p.id, { ban_duration: 'none' });
        return res.status(500).json({ error: 'Không chuyển được vào thùng rác' });
      }
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'Lỗi máy chủ' });
  }
};
