import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=> {
    return (
        <div>
            <div>
                <h2>Hi User!</h2>
            </div>
            <div>
                <NavLink to ="/mycollections"> Dashboard</NavLink>
                <NavLink to ="/"> Logout</NavLink>
                <NavLink to ="/allcollectibles"> View ALL Collectibles</NavLink>
            </div>
        </div>
    )
}


export default NavBar;