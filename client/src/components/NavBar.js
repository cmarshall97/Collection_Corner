import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=> {
    return (
        <div>
            <div>
                <h2>Collection Corner</h2>
            </div>
            <div>
                <NavLink to ="/addnewcollectible"> Add new </NavLink>
                <NavLink to ="/allcollectibles"> View all</NavLink>
            </div>
        </div>
    )
}


export default NavBar;