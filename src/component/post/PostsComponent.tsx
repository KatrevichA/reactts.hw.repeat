import React, {FC} from 'react';
import {IPosts} from "../../models/post/IPosts";
import PostComponent from "./PostComponent";

type IProps = {
    posts: IPosts[]
}

const PostsComponent:FC<IProps> = ({posts}) => {

    return (
        <div>
            {
                posts && posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;