import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.jsx";
import laptopsReducer from "./slices/laptopsSlice.jsx"

const reducers = {
    productsReducer,
    laptopsReducer
}

export const store = configureStore({
    reducer: reducers,
    devTools : true
})