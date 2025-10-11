import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])