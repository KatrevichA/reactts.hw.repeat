import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IProps ={
    user:IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id} : {user.username}
        </div>
    );
};

export default UserComponent;