import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {IUserModel} from "./models/user/IUserModel";
import {getOllPostFromUser, getOllUsers} from "./services/api.user.servise";
import UsersComponent from "./components/user/UsersComponent";
import PostsComponent from "./components/post/PostsComponent";
import {IPostModel} from "./models/post/IPostModel";

const App:FC = () => {

  const [users, setUsers] = useState<IUserModel[]>([]);
  const [posts, setPosts] = useState<IPostModel[]>([]);


  useEffect(() => {
    getOllUsers().then(value => setUsers(value.data.users))
    return
  }, []);


  const clickHandler = (id: number) => {
    getOllPostFromUser(id).then(value => setPosts(value.data.posts))
  }

  return (
    <div>

      {
        users.map((user) => <UsersComponent key={user.id} id={user.id} firstName={user.firstName} clickHandler={clickHandler}/>)
      }

      <div>
        <PostsComponent posts={posts}/>
      </div>

    </div>
  );
}

export default App;
