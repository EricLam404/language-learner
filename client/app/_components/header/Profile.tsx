"use client";

import { NavLink } from "@/components/Nav";
import { useUser } from "@/lib/hooks/useUser";
import { useLogout } from "@/utils/supabase/logout";

const Profile = () => {
    const { data: user, isLoading, error } = useUser();
    const logout = useLogout();

    if (error) return <div>Error</div>;
    if (isLoading) return <div>Loading...</div>;

    return user ? (
        <>
            <NavLink href="/profile">{user.email}</NavLink>
            <NavLink href="/?" onClick={async () => (await logout)()}>Sign out</NavLink>
        </>
    ) : (
        <>
            <NavLink href="/login">Log in</NavLink>
            <NavLink href="/login">Sign up</NavLink>
        </>
    );
};

export default Profile;
