import {createBrowserRouter} from "react-router-dom";
import {MainPage,Products,ErrorPage} from "../pages";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component:MainPage
    },
    {
        path: '/products',
        Component: Products
    },
    {
        path : '*',
        Component: ErrorPage
    }
])