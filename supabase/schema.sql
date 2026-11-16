-- =====================================================
-- SOWON GLOBAL - HỆ THỐNG CHẤM CÔNG (phiên bản 3: có thùng rác)
-- Chạy toàn bộ file này trong Supabase > SQL Editor.
-- File chạy lại an toàn: nếu bạn đã chạy bản trước, nó sẽ tự nâng cấp
-- và GIỮ NGUYÊN dữ liệu chấm công hiện có.
-- =====================================================

-- Chỉ dùng khi bạn đã chạy bản schema CŨ NHẤT (vào ca/ra ca) - bỏ dấu "--" ở 4 dòng dưới
-- để xóa bảng cũ trước khi chạy (sẽ mất dữ liệu chấm công thử nghiệm):
-- drop function if exists public.staff_check_in();
-- drop function if exists public.staff_check_out();
-- drop table if exists public.attendance cascade;
-- drop table if exists public.ctv_attendance cascade;

-- 1. Hồ sơ nhân viên / admin (liên kết với tài khoản đăng nhập của Supabase)
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text unique not null,
  full_name   text not null,
  role        text not null default 'staff' check (role in ('staff','admin')),
  hourly_rate numeric not null default 0,      -- lương theo giờ (VNĐ)
  deleted_at  timestamptz,                     -- có giá trị = đang nằm trong thùng rác
  created_at  timestamptz not null default now()
);

-- 2. Cài đặt cách tính lương (chỉ có 1 dòng, admin sửa trong trang ADMIN)
create table if not exists public.settings (
  id               int primary key default 1 check (id = 1),
  standard_hours   numeric not null default 8,        -- số giờ chuẩn mỗi ngày, vượt là OT
  ot_multiplier    numeric not null default 1.5,      -- hệ số lương OT
  night_allowance  numeric not null default 100000,   -- phụ cấp đêm (VNĐ/giờ) - chỉ nhân viên
  default_ctv_rate numeric not null default 0         -- lương/giờ mặc định của cộng tác viên
);
insert into public.settings (id) values (1) on conflict do nothing;

-- 3. Chấm công nhân viên: mỗi dòng là một lượt làm việc.
--    Lịch sử KHÔNG bị xóa theo tài khoản: user_id chỉ trỏ về hồ sơ (nếu hồ sơ bị xóa vĩnh viễn
--    thì user_id thành null), tên nhân viên được lưu riêng trong staff_name.
create table if not exists public.attendance (
  id               bigint generated always as identity primary key,
  user_id          uuid references public.profiles(id) on delete set null,
  staff_name       text,
  start_at         timestamptz not null,
  end_at           timestamptz not null,
  customer_name    text not null,
  language         text not null,
  interpreter_name text not null,
  deleted_at       timestamptz,                -- có giá trị = đang nằm trong thùng rác
  created_at       timestamptz not null default now(),
  check (end_at > start_at)
);
create index if not exists attendance_user_time on public.attendance(user_id, start_at desc);

-- 4. Chấm công cộng tác viên (không đăng nhập, ghi qua API)
create table if not exists public.ctv_attendance (
  id               bigint generated always as identity primary key,
  interpreter_name text not null,
  phone            text not null,
  start_at         timestamptz not null,
  end_at           timestamptz not null,
  customer_name    text not null,
  language         text not null,
  ip               text,
  deleted_at       timestamptz,
  created_at       timestamptz not null default now(),
  check (end_at > start_at)
);
create index if not exists ctv_time on public.ctv_attendance(start_at desc);
create index if not exists ctv_phone on public.ctv_attendance(phone);

-- 5. Lương/giờ riêng của từng cộng tác viên (theo số điện thoại); chưa có thì dùng mặc định
create table if not exists public.ctv_rates (
  phone       text primary key,
  hourly_rate numeric not null default 0
);

-- 5b. NÂNG CẤP từ bản trước (chạy lại nhiều lần vẫn an toàn)
alter table public.profiles       add column if not exists deleted_at timestamptz;
alter table public.attendance     add column if not exists deleted_at timestamptz;
alter table public.attendance     add column if not exists staff_name text;
alter table public.ctv_attendance add column if not exists deleted_at timestamptz;
update public.attendance a set staff_name = p.full_name
  from public.profiles p where a.user_id = p.id and a.staff_name is null;
alter table public.attendance alter column user_id drop not null;
alter table public.attendance drop constraint if exists attendance_user_id_fkey;
alter table public.attendance add constraint attendance_user_id_fkey
  foreign key (user_id) references public.profiles(id) on delete set null;

-- 6. Hàm kiểm tra admin
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles
                  where id = auth.uid() and role = 'admin' and deleted_at is null);
$$;

-- 7. Bật Row Level Security
alter table public.profiles       enable row level security;
alter table public.settings       enable row level security;
alter table public.attendance     enable row level security;
alter table public.ctv_attendance enable row level security;
alter table public.ctv_rates      enable row level security;

-- profiles: nhân viên chỉ xem hồ sơ của mình (nếu chưa vào thùng rác); admin xem/sửa tất cả
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select
  using ((id = auth.uid() and deleted_at is null) or public.is_admin());
drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles for update
  using (public.is_admin()) with check (public.is_admin());

-- settings: chỉ admin
drop policy if exists settings_select on public.settings;
create policy settings_select on public.settings for select using (public.is_admin());
drop policy if exists settings_update on public.settings;
create policy settings_update on public.settings for update
  using (public.is_admin()) with check (public.is_admin());

-- attendance: nhân viên xem lịch sử của mình (không thấy bản ghi trong thùng rác),
-- admin xem/sửa/xóa tất cả. Nhân viên thêm bản ghi qua hàm staff_add_shift bên dưới.
drop policy if exists attendance_select on public.attendance;
create policy attendance_select on public.attendance for select
  using ((user_id = auth.uid() and deleted_at is null) or public.is_admin());
drop policy if exists attendance_admin_update on public.attendance;
create policy attendance_admin_update on public.attendance for update
  using (public.is_admin()) with check (public.is_admin());
drop policy if exists attendance_admin_delete on public.attendance;
create policy attendance_admin_delete on public.attendance for delete
  using (public.is_admin());

-- ctv_attendance: chỉ admin (việc ghi đi qua API dùng service key)
drop policy if exists ctv_select on public.ctv_attendance;
create policy ctv_select on public.ctv_attendance for select using (public.is_admin());
drop policy if exists ctv_admin_update on public.ctv_attendance;
create policy ctv_admin_update on public.ctv_attendance for update
  using (public.is_admin()) with check (public.is_admin());
drop policy if exists ctv_admin_delete on public.ctv_attendance;
create policy ctv_admin_delete on public.ctv_attendance for delete using (public.is_admin());

-- ctv_rates: chỉ admin
drop policy if exists ctv_rates_all on public.ctv_rates;
create policy ctv_rates_all on public.ctv_rates for all
  using (public.is_admin()) with check (public.is_admin());

-- 8. Hàm nhân viên thêm bản ghi chấm công (kiểm tra dữ liệu ở máy chủ)
create or replace function public.staff_add_shift(
  p_start timestamptz, p_end timestamptz,
  p_customer text, p_language text, p_interpreter text)
returns public.attendance language plpgsql security definer set search_path = public as $$
declare r public.attendance; v_name text;
begin
  if auth.uid() is null then raise exception 'Chưa đăng nhập'; end if;
  select full_name into v_name from public.profiles where id = auth.uid() and deleted_at is null;
  if v_name is null then raise exception 'Tài khoản không còn hoạt động'; end if;
  p_customer := btrim(coalesce(p_customer, ''));
  p_language := btrim(coalesce(p_language, ''));
  p_interpreter := btrim(coalesce(p_interpreter, ''));
  if length(p_customer) < 2 or length(p_customer) > 100 then raise exception 'Vui lòng nhập tên khách hàng'; end if;
  if length(p_language) < 2 or length(p_language) > 40 then raise exception 'Vui lòng nhập ngôn ngữ'; end if;
  if length(p_interpreter) < 2 or length(p_interpreter) > 80 then raise exception 'Vui lòng nhập tên phiên dịch viên'; end if;
  if p_end <= p_start then raise exception 'Giờ kết thúc phải sau giờ bắt đầu'; end if;
  if p_end - p_start > interval '16 hours' then raise exception 'Một lượt làm việc không được quá 16 giờ'; end if;
  if p_start < now() - interval '31 days' then raise exception 'Chỉ được chấm công trong vòng 31 ngày gần đây'; end if;
  if p_start > now() + interval '1 day' then raise exception 'Không thể chấm công cho thời điểm trong tương lai'; end if;
  if exists (select 1 from public.attendance
              where user_id = auth.uid() and deleted_at is null
                and tstzrange(start_at, end_at) && tstzrange(p_start, p_end)) then
    raise exception 'Khoảng thời gian này bị trùng với một lượt chấm công đã nhập';
  end if;
  insert into public.attendance (user_id, staff_name, start_at, end_at, customer_name, language, interpreter_name)
  values (auth.uid(), v_name, p_start, p_end, p_customer, p_language, p_interpreter)
  returning * into r;
  return r;
end $$;

revoke all on function public.staff_add_shift(timestamptz, timestamptz, text, text, text) from public, anon;
grant execute on function public.staff_add_shift(timestamptz, timestamptz, text, text, text) to authenticated;

-- =====================================================
-- TẠO ADMIN ĐẦU TIÊN (làm sau khi tạo user trong Authentication > Users)
-- 1) Authentication > Users > Add user:
--      Email: admin@staff.sowonglobal.local   (mật khẩu tự đặt, tick "Auto confirm")
-- 2) Rồi chạy lệnh dưới:
--
-- insert into public.profiles (id, username, full_name, role)
-- select id, 'admin', 'Quản trị viên', 'admin'
--   from auth.users where email = 'admin@staff.sowonglobal.local';
-- =====================================================
