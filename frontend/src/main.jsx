import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {routes} from "./router/router.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <RouterProvider router={routes}>
                <div>
                    <App/>
                </div>
            </RouterProvider>

        </Provider>
    </>
    ,
)
