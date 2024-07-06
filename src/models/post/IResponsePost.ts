import {IPostModel} from "./IPostModel";

export interface IResponsePost {
    "posts": IPostModel[],
    "total": number,
    "skip": number,
    "limit": number
}