import React, {FC} from 'react';
import {IUserModel} from "../../models/user/IUserModel";

type IPropsWithChildren<T> = T
    & {clickHandler:(id:number)=>void}

const UsersComponent:FC<IPropsWithChildren<IUserModel>> = ({id, firstName, clickHandler}) => {



    return (
        <div>
            {id} - {firstName}
            <button onClick={()=> {
                clickHandler(id)
            }}>Posts</button>

        </div>
    );
};

export default UsersComponent;