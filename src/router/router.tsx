import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorLayout from "../layout/ErrorLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, errorElement: <ErrorLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path:'/users', element: <UsersPage/>},
        {path:'users/:id', element: <UserPage/>},
        {path:'users/:id/posts', element: <PostsPage/>},
        {path: '/todos', element: <TodosPage/>},
    ]
    },

])