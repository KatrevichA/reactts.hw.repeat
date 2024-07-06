import {IReactions} from "./IReactions";

export interface IPostModel {
    "id"?: number,
    "title": string,
    "body"?: string,
    "userId": number,
    "tags"?: string[],
    "reactions"?: IReactions
}