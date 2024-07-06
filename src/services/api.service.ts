import axios, {AxiosResponse} from "axios";
import {IResponseUser} from "../models/user/IResponseUser";
import {IResponsePost} from "../models/post/IResponsePost";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: {'Content-Type': 'application/json'}
})


const getAllUsers = ():Promise<AxiosResponse<IResponseUser>> => {
    return axiosInstance.get('')
}

// 'https://dummyjson.com/users/5/posts'
const getAllPostsByUserId = (userId:number):Promise<AxiosResponse<IResponsePost>> => {
    return axiosInstance.get('' + userId + '/posts')
}

export {
    getAllUsers,
    getAllPostsByUserId
}
