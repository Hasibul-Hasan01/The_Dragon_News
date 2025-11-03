import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBlog from "../Pages/CategoryPage/CategoryBlog";
import SignIn from "../Components/Auth/SignIn/SignIn";
import AuthLayout from "../Layout/AuthLayout";
import SignUp from "../Components/Auth/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <CategoryBlog />,
                loader: () => fetch('/news.json')
            },


        ]


    },
    {
        path: '/signin',
        element: <AuthLayout />,
        children: [
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    },
    {
        path: '/signup',
        element: <AuthLayout />,
        children: [
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }


])



// {
//     path: '/signin',
//         element: <AuthLayout />,
//             children: [
//                 {
//                     path: '/signin',
//                     element: <SignIn />
//                 },
//                 {
//                     path: "/signup",
//                     element: <SignUp />
//                 }
//             ]
// }