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
		<NavLink to="/CourseNew" activeStyle>
			Save
		</NavLink>
		<NavLink to = "/CourseNew" activeStyle> 
			Upload
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
