import React from 'react';
import PostsComponent from "../component/posts/PostsComponent";
import {Provider} from "react-redux";
import {store} from "../redux/apiStore/store.api";

const PostsPage = () => {
    return (
        <div>
            <Provider store={store}>
                <PostsComponent/>
            </Provider>
        </div>
    );
};

export default PostsPage;