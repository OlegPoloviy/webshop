import {createBrowserRouter} from "react-router-dom";
import {MainPage,Products,ErrorPage,Product,LaptopsPage} from "../pages";
import App from '../App.jsx'

export const routes = createBrowserRouter([
    {
        path: '/',
        Component:App,
        children: [
            {
                path: '/products',
                Component: Products
            },
            {
                path: '/',
                Component: MainPage
            },
            {
                path: '/products/:id',
                Component: Product
            },
            {
                path: '/laptops',
                Component: LaptopsPage
            }
        ]
    },
    {
        path : '*',
        Component: ErrorPage
    }
])