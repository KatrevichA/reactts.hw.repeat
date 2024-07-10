import React, {FC} from 'react';
import {IUsers} from "../../models/user/IUsers";
import {NavLink} from "react-router-dom";

type IProps = {
    user: IUsers
}

const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            {user.id} - {user.firstName}
            <NavLink to={user.id.toString()}>Details</NavLink>
        </div>
    );
};

export default UserComponent;