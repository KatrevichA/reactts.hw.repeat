import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IFormType} from "../model/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../validator/post.Validator";

const FormComponent = () => {

    let {
        formState:{errors,isValid},
        register,
        handleSubmit
    } = useForm<IFormType>({mode:'all', resolver:joiResolver(postValidator)});

    const [info, setInfo] = useState<IFormType>()

    let formSubmitCustomHandler = (data: IFormType) => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: data.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>
                setInfo(json)
                // console.log(json)
            );
    //     можна виводити те що ви захечете;
    }



    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>

                {errors.userId && <div>ERROR: {errors.userId?.message}</div>}
                <input placeholder={'User Id'} type={'number'} {...register('userId')}/>

                <br/>
                {errors.title && <div>ERROR: {errors.title?.message}</div>}
                <input placeholder='Title' type={'text'} {...register('title')}/>

                <br/>
                {errors.body && <div>ERROR: {errors.body?.message}</div>}
                <input placeholder={'Body'} type={'text'} {...register('body')}/>
                <br/>
                <button disabled={!isValid}>SEND</button>

                <p> Post id - {info?.id}</p>
                <p> Title - {info?.title}</p>
                <p> Body - {info?.body}</p>
                <p> User Id - {info?.userId}</p>
            </form>
        </div>
    );
};

export default FormComponent;