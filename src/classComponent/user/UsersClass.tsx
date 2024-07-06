import React from "react";
import {getAllUsers} from "../../services/api.service";
import {IUserModel} from "../../models/user/IUserModel";
import UserClass from "./UserClass";
import PostsClass from "../post/PostsClass";


type MyState = {
    users: IUserModel[]
}


class UsersClass extends React.Component<{}, MyState> {

    state: MyState = {
        users: []
    }

    componentDidMount() {
        getAllUsers().then(value =>
            this.setState({users: value.data.users}))

    }

    render() {
        return (<div>
            {
                this.state.users.map(user => (
                    <UserClass key={user.id}
                               user={user}
                               clickHandler={id => this}/>))
            }

            <div><PostsClass id={2}/></div>

        </div>)
    }

}


export default UsersClass;