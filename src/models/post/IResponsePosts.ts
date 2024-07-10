import {IPosts} from "./IPosts";

export interface IResponsePosts {
    limit:number,
    posts:IPosts [],
    skip: number,
    total: number
}