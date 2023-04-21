import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

const Navbar = () => {

const [windowDim, setDim] = useState({width: window.innerWidth, height:window.innerHeight});
const detectSize=()=>{
  setDim({width: window.innerWidth, height: window.innerHeight});
}

useEffect(()=>{
    window.addEventListener('resize', detectSize);
    return()=>{
        window.removeEventListener('resize', detectSize);
    }
}, [windowDim]);

const [Btn, setBtn] = useState(false);
//confetti
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