import React from 'react';
import {NavLink, useParams} from "react-router-dom";

const UserPage = () => {

    const {id} = useParams();

    return (
        <div>
            <h3>User {id}</h3>
            <br/>
            <NavLink to={'posts'}> Post</NavLink>
        </div>
    );
};

export default UserPage;