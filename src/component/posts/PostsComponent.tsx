import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/apiStore/store.api";
import {postActions} from "../../redux/slice/postSlice";
import PostComponent from "./postComponent";


const PostsComponent = () => {

    const {postSlice:{posts,isLoaded}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>

            <h2>Posts Component</h2>

            {!isLoaded && <h5>Loading is process .......</h5>}

            {posts.map(post=> <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;