import {IUsers} from "./IUsers";

export interface IResponseUsers {
    limit: number,
    skip: number,
    total: number,
    users: IUsers []
}