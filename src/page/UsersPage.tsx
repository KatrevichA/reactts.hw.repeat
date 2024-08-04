import React from 'react';
import {Provider} from "react-redux";
import {store} from "../redux/apiStore/store.api";
import UsersComponent from "../component/users/UsersComponent";

const UsersPage = () => {
    return (
        <div>
            <Provider store={store}>
                <UsersComponent/>
            </Provider>
        </div>
    );
};

export default UsersPage;