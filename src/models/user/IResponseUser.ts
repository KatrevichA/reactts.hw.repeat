import {IUserModel} from "./IUserModel";

export interface IResponseUser {
    "users": IUserModel[],
    "total": number,
    "skip": number,
    "limit": number
}