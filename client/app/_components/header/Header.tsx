import Nav, { NavLink } from "@/components/Nav";
import Profile from "./Profile";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MountainIcon, ChevronDownIcon, MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Nav>
            <NavLink
                href="/dashboard"
                className="flex items-center gap-2"
                prefetch={false}
            >
                <MountainIcon className="h-6 w-6" />
                <span className="font-bold">Language Learner</span>
            </NavLink>
            <div className="flex w-full justify-end gap-2 md:gap-16">
                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-4 justify-right md:justify-center md:flex">
                    <NavLink
                        href="/dashboard"
                        className="font-medium hover:text-primary"
                        prefetch={false}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        href="/story"
                        className="font-medium hover:text-primary"
                        prefetch={false}
                    >
                        My Stories
                    </NavLink>
                    <NavLink
                        href="/vocabulary"
                        className="font-medium hover:text-primary"
                        prefetch={false}
                    >
                        My Vocabulary
                    </NavLink>
                    {/* <NavLink
                    href="#"
                    className="font-medium hover:text-primary"
                    prefetch={false}
                >
                    My Worksheets
                </NavLink> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="font-medium text-base"
                            >
                                Public Content{" "}
                                <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <NavLink href="/public/story" prefetch={false}>
                                    Public Stories
                                </NavLink>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>
                            <NavLink href="#" prefetch={false}>
                                Public Vocabulary
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <NavLink href="#" prefetch={false}>
                                Public Worksheets
                            </NavLink>
                        </DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Mobile Nagivation*/}
                <nav className="relative items-center gap-4 justify-center md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="font-medium text-base"
                            >
                                <MenuIcon className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <NavLink
                                    href="/dashboard"
                                    className="font-medium hover:text-primary"
                                    prefetch={false}
                                >
                                    Dashboard
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <NavLink
                                    href="/story"
                                    className="font-medium hover:text-primary"
                                    prefetch={false}
                                >
                                    My Stories
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <NavLink
                                    href="/vocabulary"
                                    className="font-medium hover:text-primary"
                                    prefetch={false}
                                >
                                    My Vocabulary
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="font-medium text-base"
                                        >
                                            Public Content{" "}
                                            <ChevronDownIcon className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <NavLink
                                                href="/public/story"
                                                prefetch={false}
                                            >
                                                Public Stories
                                            </NavLink>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
                <div className="flex items-center gap-4">
                    <Profile />
                </div>
            </div>
        </Nav>
    );
};

export default Header;
