import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>

            <div><NavLink to={'/counter'}>Counter</NavLink></div>
            <div> <NavLink to={'/posts'}>Posts</NavLink></div>
            <div> <NavLink to={'/users'}>Users</NavLink></div>

        </div>
    );
};

export default HeaderComponent;