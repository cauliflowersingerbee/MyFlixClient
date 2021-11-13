import React from "react";

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/profile" activeStyle>
                    Profile
                </NavLink>
                <NavLink to="/directors" activeStyle>
                    Directors
                </NavLink>
                <NavLink to="/genres" activeStyle>
                    Genres
                </NavLink>
                <NavLink to="/logout" activeStyle>
                    Log Out
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
