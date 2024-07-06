import React, {Component} from 'react';
import {IUserModel} from "../../models/user/IUserModel";


type PropsType = { user: IUserModel,clickHandler:(id:number)=>void} & {};


class UserComponent extends Component <PropsType> {


    render() {
        return (
            <div>
                {this.props.user.id} -
                {this.props.user.firstName} -
                <button onClick={()=> {
                    this.props.clickHandler(this.props.user.id)
                }}>
                    Post of User</button>
            </div>
        );
    }
}

export default UserComponent;