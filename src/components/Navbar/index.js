import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/courses" activeStyle>
			Courses
		</NavLink>
		<NavLink to="/test" activeStyle>
			Test
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
