import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/apiStore/store.api";
import {userActions} from "../../redux/slice/userSlice";
import UserComponent from "./userComponent";

const UsersComponent = () => {

    const {userSlice:{users, isLoaded}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <h2>USER Component</h2>

            {!isLoaded && <h5>Loading is process ........</h5>}

            {users.map(user => <UserComponent key={user.id} user={user}/>)}

        </div>
    );
};

export default UsersComponent;