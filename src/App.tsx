import React, {FC} from 'react';
import './App.css';
import UsersClass from "./classComponent/user/UsersClass";
import PostsClass from "./classComponent/post/PostsClass";

const App:FC = () => {

  return (
    <div>
      <UsersClass/>
    </div>
  );
}

export default App;
