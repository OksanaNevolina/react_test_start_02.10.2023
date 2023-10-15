import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div >
           <NavLink to={'todos'}>Todos</NavLink>
            <br/>
           <NavLink to={'albums'}>Albums</NavLink>
            <br/>
           <NavLink to={'comments'}>Comments</NavLink>
            <hr/>
        </div>
    );
};

export default Navbar;