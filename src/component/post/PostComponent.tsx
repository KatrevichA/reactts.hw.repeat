import React, {FC} from 'react';
import {IPosts} from "../../models/post/IPosts";

type IProps = {
    post: IPosts
}

const PostComponent:FC<IProps> = ({post}) => {

    return (
        <div>
            {post.userId} - {post.title}
        </div>
    );
};

export default PostComponent;