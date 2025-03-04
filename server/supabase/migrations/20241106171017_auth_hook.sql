
-- -- authorize with role-based access control (RBAC)
-- create function public.authorize(requested_permission app_permission) returns boolean as $$
-- declare bind_permissions int;
-- begin
-- select count(*)
-- from public.role_permissions
-- where role_permissions.permission = authorize.requested_permission
--     and role_permissions.role = (auth.jwt()->>'user_role')::public.app_role into bind_permissions;
-- return bind_permissions > 0;
-- end;
-- $$ language plpgsql security definer
-- set search_path = public;

-- -- inserts a row into public.users and assigns roles
-- create function public.handle_new_user() returns trigger as $$
-- declare is_admin boolean;
-- begin
-- insert into public.users (id, username)
-- values (new.id, new.email);
-- select count(*) = 1
-- from auth.users into is_admin;
-- if position('+supaadmin@' in new.email) > 0 then
-- insert into public.user_roles (user_id, role)
-- values (new.id, 'admin');
-- elsif position('+supamod@' in new.email) > 0 then
-- insert into public.user_roles (user_id, role)
-- values (new.id, 'moderator');
-- end if;
-- return new;
-- end;
-- $$ language plpgsql security definer
-- set search_path = auth,
--     public;

-- -- trigger the function every time a user is created
-- create trigger on_auth_user_created
-- after
-- insert on auth.users for each row execute procedure public.handle_new_user();
