import React from 'react';
import {NavLink} from "react-router-dom";

const LayoutComponent = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink> ----
            <NavLink to={'/users'}>Users</NavLink>----
            <NavLink to={'/todos'}>Todos</NavLink>
        </div>
    );
};

export default LayoutComponent;