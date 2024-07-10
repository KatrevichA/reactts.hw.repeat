import React, {useEffect, useState} from 'react';
import UsersComponent from "../component/user/UsersComponent";
import {IUsers} from "../models/user/IUsers";


const UsersPage = () => {

    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            // .then(console.log)
            .then(res => {setUsers(res.users)});
    }, []);

    return (
        <div>
            UsersPage
            <UsersComponent users={users}/>

        </div>
    );
};

export default UsersPage;