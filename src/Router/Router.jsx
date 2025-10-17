import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBlog from "../Pages/CategoryPage/CategoryBlog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <CategoryBlog />,
                loader: () => fetch('/news.json')
            }
        ]
    }
])