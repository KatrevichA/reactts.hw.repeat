import axios, {AxiosResponse} from "axios";
import {IResponsePosts} from "../models/post/IResponsePosts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' }
});

const getPostByUserId = (Id: number):Promise<AxiosResponse <IResponsePosts[]>> => {
return axiosInstance.get(`/users/${Id}/posts`);
}

export {
    getPostByUserId
}
