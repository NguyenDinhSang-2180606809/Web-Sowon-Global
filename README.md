# Hệ thống chấm công Sowon Global — hướng dẫn triển khai

Gồm 3 trang ẩn trên sowonglobal.com.vn:

| Địa chỉ | Dành cho | Đăng nhập |
|---|---|---|
| /CTV | Cộng tác viên: nhập một lượt làm việc (ngày, giờ bắt đầu, giờ kết thúc, tên khách hàng, ngôn ngữ, tên phiên dịch viên, số điện thoại) | Không |
| /NV | Nhân viên: nhập lượt làm việc với đủ các mục trên, xem lịch sử và tổng giờ của mình | Có (tài khoản do admin cấp) |
| /ADMIN | Quản lý: thêm/xóa tài khoản, xem/sửa/xóa chấm công của NV và CTV, tính lương, xuất CSV, cài đặt cách tính lương | Có (chỉ tài khoản admin) |

## Cách tính lương

- Giờ làm được cộng theo từng ngày (tính theo ngày bắt đầu của lượt làm việc). Phần vượt **8 giờ/ngày** là giờ OT.
- Tiền = giờ thường × lương/giờ + giờ OT × lương/giờ × hệ số OT.
- **Nhân viên** được thêm phụ cấp đêm **100.000 ₫/giờ** cho số giờ làm trong khung **22:00 – 06:00**. Cộng tác viên không có phụ cấp này.
- Lương/giờ của nhân viên đặt theo từng người; của cộng tác viên đặt theo số điện thoại (chưa đặt thì dùng mức mặc định).
- Các con số 8 giờ, hệ số OT, 100.000 ₫ và mức mặc định của CTV đều chỉnh được ở tab **Cài đặt lương** trong /ADMIN.
- **Hệ số OT đang đặt mặc định là 1,5 (150%)** — hãy đổi lại cho đúng quy định của công ty.

## Cấu trúc file (chép vào thư mục gốc của website)

```
ctv.html, nv.html, admin.html     ← 3 trang
chamcong/                         ← config.js, common.js, chamcong.css
api/                              ← _lib.js, ctv-checkin.js, admin-users.js (chạy trên Vercel)
supabase/schema.sql               ← tạo bảng (chỉ dùng 1 lần, không cần đưa lên website)
vercel.json                       ← đường dẫn /CTV /NV /ADMIN
```

Nếu website đã có sẵn `vercel.json`, hãy GỘP phần `rewrites` và `headers` vào file cũ, đừng ghi đè.
Các trang đang dùng logo `/logo.png` — nếu logo của bạn ở đường dẫn khác, sửa lại thẻ `<img>` ở đầu mỗi trang.

## Bước 1 — Tạo cơ sở dữ liệu (Supabase, miễn phí)

1. Vào supabase.com, đăng ký và tạo Project mới (chọn vùng Singapore cho nhanh).
2. Vào **SQL Editor**, dán toàn bộ nội dung `supabase/schema.sql` và bấm Run.
   Nếu bạn đã chạy bản schema trước đó (có nhập 6 mục chấm công), chỉ cần chạy lại file này: nó tự nâng cấp và giữ nguyên dữ liệu.
   Chỉ khi bạn từng chạy bản cũ nhất (vào ca/ra ca) mới cần bỏ dấu `--` ở 4 dòng `drop` đầu file.
3. Vào **Authentication > Users > Add user**: email `admin@staff.sowonglobal.local`, đặt mật khẩu mạnh, tick **Auto confirm user**.
4. Quay lại SQL Editor, chạy lệnh sau để biến tài khoản đó thành admin:

```sql
insert into public.profiles (id, username, full_name, role)
select id, 'admin', 'Quản trị viên', 'admin'
  from auth.users where email = 'admin@staff.sowonglobal.local';
```

Tên đăng nhập admin sẽ là `admin`.

## Bước 2 — Điền khóa kết nối

Vào **Project Settings > API**, lấy:
- **Project URL** và **anon public key** → điền vào `chamcong/config.js` (2 giá trị này là công khai, an toàn).
- **service_role key** → TUYỆT ĐỐI không dán vào file nào trong website. Chỉ đặt ở bước 3.

## Bước 3 — Đặt biến môi trường trên Vercel

Vercel > Project > Settings > Environment Variables, thêm 2 biến:
- `SUPABASE_URL` = Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = service_role key

Sau đó **Redeploy** website.

## Bước 4 — Đưa file lên và kiểm tra

Đưa các file lên cùng nơi bạn đang triển khai website (GitHub hoặc tải trực tiếp lên Vercel), rồi thử:
1. `/ADMIN` → đăng nhập `admin` → tab Nhân viên → thêm một tài khoản thử, rồi vào Cài đặt lương kiểm tra các con số.
2. `/NV` → đăng nhập bằng tài khoản vừa tạo → nhập một lượt làm việc (thử cả ca qua 22:00).
3. `/CTV` → nhập một lượt làm việc → thấy "Đã chấm công thành công".
4. Quay lại `/ADMIN` xem tab Chấm công NV, Chấm công CTV, Tính lương.

## Những điều cần lưu ý

- Địa chỉ ẩn không phải là bảo mật. Dữ liệu được bảo vệ bằng đăng nhập và phân quyền ở cơ sở dữ liệu; trang ẩn chỉ là thêm một lớp kín đáo. Các trang đã có thẻ `noindex` để Google không hiển thị.
- Giờ bắt đầu/kết thúc do người dùng tự nhập (không phải giờ máy chủ), nên quản lý cần đối chiếu với khách hàng. Hệ thống chặn: giờ kết thúc quá 16 giờ sau giờ bắt đầu, ngày quá 31 ngày trước hoặc ở tương lai, và các lượt bị chồng giờ của cùng một người. Nhân viên không tự sửa/xóa được bản ghi đã gửi; quản lý sửa hoặc xóa ở /ADMIN.
- /CTV không đăng nhập nên ai biết địa chỉ cũng gửi được. Hệ thống giới hạn tối đa 10 lượt trong 10 phút cho một số điện thoại và lưu IP. Nếu cần chặt hơn, có thể thêm mã chấm công đổi hằng ngày.
- Ca qua nửa đêm: nhập giờ kết thúc nhỏ hơn giờ bắt đầu. Ca được tính vào ngày bắt đầu.
- **Lịch sử chấm công luôn được giữ lại** khi bạn đổi mật khẩu, đổi tên đăng nhập, đổi họ tên hoặc xóa tài khoản nhân viên (lịch sử gắn với tài khoản, không gắn với tên đăng nhập).
- **Thùng rác:** khi bạn xóa tài khoản nhân viên, bản ghi chấm công NV hoặc bản ghi chấm công CTV, mục đó chỉ được chuyển vào tab "Thùng rác" — vào đó bấm "Khôi phục" để lấy lại, hoặc "Xóa vĩnh viễn" để xóa hẳn (không thể hoàn tác).
  - Tài khoản trong thùng rác không đăng nhập được, và tên đăng nhập vẫn được giữ chỗ cho đến khi xóa vĩnh viễn hoặc khôi phục.
  - Tài khoản đã xóa vĩnh viễn: lịch sử chấm công vẫn còn (hiển thị "đã xóa vĩnh viễn") nhưng không còn được tính lương. Nếu cần chốt lương, hãy xuất CSV trước khi xóa vĩnh viễn tài khoản.
  - Bản ghi chấm công trong thùng rác không được tính lương và nhân viên không còn nhìn thấy chúng.
