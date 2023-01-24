import React from 'react';
import {NavLink} from 'react-router-dom';
import NavbarCSS from './NavBar.module.css'

const NavBar = ()=> {
    return (
        <div className={NavbarCSS.navBar}>
            <div className={NavbarCSS.title}>
                <h2>Collection Corner</h2>
            </div>
            <div className={NavbarCSS.linkDirectory}>
                <NavLink to ="/addnewcollectible"> Add new </NavLink>
                <NavLink to ="/allcollectibles"> View all</NavLink>
            </div>
        </div>
    )
}


export default NavBar;