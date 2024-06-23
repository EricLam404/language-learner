import Nav, { NavLink } from "@/components/Nav";
import { signout } from "@/utils/supabase/signout";

const Header = () => {
    return (
        <Nav>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/story">Story</NavLink>
            <NavLink href="/vocabulary">Vocabulary</NavLink>
            <NavLink href="/worksheets">Worksheets</NavLink>
            <NavLink href="/" onClick={(signout) }>Sign Out</NavLink>
        </Nav>
    );
};

export default Header;
