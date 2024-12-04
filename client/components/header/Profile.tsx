"use client";

import { NavLink } from "@/components/Nav";
import { useUser } from "@/lib/hooks/useUser";
import { useLogout } from "@/lib/hooks/useLogout";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { LoaderCircle, ShieldAlert } from "lucide-react";

const Profile = () => {
    const { data: user, isLoading, error } = useUser();
    const logout = useLogout();

    if (error) return <ShieldAlert />;
    if (isLoading) return <LoaderCircle />;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JP</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {user ? (
                    <>
                        <DropdownMenuItem>
                            <NavLink href="/profile" prefetch={false}>
                                Profile
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <NavLink href="/setting" prefetch={false}>
                                Settings
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <NavLink href="/login" prefetch={false} onClick={async () => (await logout)()}>
                                Log out
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem>
                            <NavLink href="#" prefetch={false}>
                                Help
                            </NavLink>
                        </DropdownMenuItem> */}
                    </>
                ) : (
                    <>
                        <DropdownMenuItem>
                            <NavLink href="/login" prefetch={false}>
                                Log in / Sign up
                            </NavLink>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Profile;
