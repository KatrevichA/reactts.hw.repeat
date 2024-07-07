import React, {Component} from 'react';
import {IUserModel} from "../../models/user/IUserModel";
import {getAllPostsByUserId} from "../../services/api.service";


type PropsType = { user: IUserModel, getAllPostsByUserId:(id:number)=>void} & {};


class UserComponent extends Component <PropsType> {


    render() {
        return (
            <div>
                {this.props.user.id} -
                {this.props.user.firstName} -
                <button onClick={()=> {
                    this.props.getAllPostsByUserId(this.props.user.id)
                }}>
                    Post of User</button>
            </div>
        );
    }
}

export default UserComponent;