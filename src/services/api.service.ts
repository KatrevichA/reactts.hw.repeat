import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../model/IPostModel";

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const postApiService ={
    postNewPost:():Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance.post('/posts')
    }
}

export {
    postApiService
}