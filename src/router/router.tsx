import {createBrowserRouter} from "react-router-dom";
import CounterPage from "../page/CounterPage";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../page/UsersPage";
import PostsPage from "../page/PostsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1> ERROR! ERROR! ERROR!</h1>,
        children: [
            {
                path: '/counter', element: <CounterPage/>
            },
            {
                path: '/users', element: <UsersPage/>
            },
            {
                path: '/posts', element: <PostsPage/>
            }
        ]

    }
]);