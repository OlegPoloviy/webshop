import {Provider} from "react-redux";
import {store} from "./store/index.jsx";
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import {routes} from "./router/router.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <GoogleOAuthProvider clientId={'339780361659-honcr3h07804l4v53bqscpbu4i8tpmpv.apps.googleusercontent.com'}>
            <Provider store={store}>
                <RouterProvider router={routes}>
                    <div>
                        <App/>
                    </div>
                </RouterProvider>

            </Provider>
        </GoogleOAuthProvider>
    </>
    ,
)
