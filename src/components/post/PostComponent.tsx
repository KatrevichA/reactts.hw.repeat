import React, {FC} from 'react';
import {IPostModel} from "../../models/post/IPostModel";

const PostComponent:FC<IPostModel> = ({userId, title}) => {
    return (
        <div>
            <h4>{userId}</h4>
            <p>{title}</p>
        </div>
    );
};

export default PostComponent;