import React, {FC} from 'react';
import {IUsers} from "../../models/user/IUsers";
import UserComponent from "./UserComponent";

type IProps = {
    users: IUsers[]
}

const UsersComponent:FC<IProps> = ({users}) => {


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;