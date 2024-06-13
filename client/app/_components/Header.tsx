import Nav, { NavLink } from "@/components/Nav";

const Header = () => {
    return (
        <Nav>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/story">Story</NavLink>
            <NavLink href="/vocabulary">Vocabulary</NavLink>
            <NavLink href="/worksheets">Worksheets</NavLink>
        </Nav>
    );
};

export default Header;
