import React, {FC} from 'react';
import {IPostModel} from "../../models/post/IPostModel";
import PostComponent from "./PostComponent";

type IProps = {
    posts: IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} title={post.title} userId={post.userId}/> )
            }

        </div>
    );
};

export default PostsComponent;