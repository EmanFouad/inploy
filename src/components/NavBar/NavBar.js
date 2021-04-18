import React from 'react';
import logo from "../../assets/images/logo.png";

const NavBar = () => {
    return ( 
        <>
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"/>
        </nav>
        </>
     );
}
 
export default NavBar;