import React from "react";
import {getAllPostsByUserId, getAllUsers} from "../../services/api.service";
import {IUserModel} from "../../models/user/IUserModel";
import UserClass from "./UserClass";
import PostsClass from "../post/PostsClass";
import {IPostModel} from "../../models/post/IPostModel";


type MyState = {
    users: IUserModel[],
    posts:IPostModel[],
    getAllPostsByUserId:(id:number)=>void
}

class UsersClass extends React.Component<{}, MyState> {

    state: MyState = {
        users: [],
        posts:[],
        getAllPostsByUserId:(id:number)=>getAllPostsByUserId(id).then(value => this.setState({posts:value.data.posts}))
    }

    componentDidMount() {
        getAllUsers().then(value =>
            this.setState({users: value.data.users}))

    }

    render() {

        const {getAllPostsByUserId,posts} = this.state;

        return (<div>
            {
                this.state.users.map(user => (
                    <UserClass key={user.id}
                               user={user}
                               getAllPostsByUserId={getAllPostsByUserId}/>))
            }

            <div><PostsClass posts={posts}/></div>

        </div>)
    }

}


export default UsersClass;