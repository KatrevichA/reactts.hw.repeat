import React, {useEffect, useState} from 'react';
import PostsComponent from "../component/post/PostsComponent";
import {IPosts} from "../models/post/IPosts";
import {NavLink, useLocation, useParams} from "react-router-dom";

const PostsPage = () => {

    const {id} = useParams();
    const location = useLocation();
    console.log(location)

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        if (id) {
            // * getting posts of user with id 5 */
                fetch(`https://dummyjson.com/users/${id}/posts`)
                    .then(res => res.json())
                    // .then(console.log);
                    .then(res => {setPosts(res.posts)})
        }

    }, [id]);

    return (
        <div>
            PostsPage
            <PostsComponent posts={posts}/>
            <hr/>
            <NavLink to={'/users'}>Go to back</NavLink>
        </div>
    );
};

export default PostsPage;