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

const links = [
    {
        href: "/dashboard",
        label: "Dashboard",
    },
    {
        href: "library",
        label: "My Library",
    },
    {
        href: "/story",
        label: "My Stories",
    },
    {
        href: "/vocabulary",
        label: "My Vocabulary",
    },
]

const publicContent = [
    {
        href: "/public/story",
        label: "Public Stories",
    },
    // {
    //     href: "#",
    //     label: "Public Vocabulary",
    // },
    // {
    //     href: "#",
    //     label: "Public Worksheets",
    // },
]

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
                    {links.map((link) => (
                        <NavLink
                            href={link.href}
                            className="font-medium hover:text-primary"
                            prefetch={false}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    
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
                            {publicContent.map((link) => (
                                <DropdownMenuItem>
                                    <NavLink
                                        href={link.href}
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
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
                            {links.map((link) => (
                                <DropdownMenuItem>
                                    <NavLink
                                        href={link.href}
                                        className="font-medium hover:text-primary"
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="md:font-medium text-base"
                                        >
                                            Public Content{" "}
                                            <ChevronDownIcon className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {publicContent.map((link) => (
                                            <DropdownMenuItem>
                                                <NavLink
                                                    href={link.href}
                                                    prefetch={false}
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </DropdownMenuItem>
                                        ))}
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
