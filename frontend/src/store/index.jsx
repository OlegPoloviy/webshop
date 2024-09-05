import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.jsx";

export const store = configureStore({
    reducer: productsReducer,
    devTools : true
})