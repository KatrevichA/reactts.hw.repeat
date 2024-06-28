import axios, {AxiosResponse} from "axios";
import {IResponseUser} from "../models/user/IResponseUser";
import {IResponsePost} from "../models/post/IResponsePost";

const axiosInstence = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: {'Content-Type': 'application/json'}
})


const getOllUsers = ():Promise<AxiosResponse<IResponseUser>> => {
    return axiosInstence.get('')
}

// 'https://dummyjson.com/users/5/posts'
const getOllPostFromUser = (userId:number):Promise<AxiosResponse<IResponsePost>> => {
    return axiosInstence.get('' + userId + '/post')
}

export {
    getOllUsers,
    getOllPostFromUser
}

