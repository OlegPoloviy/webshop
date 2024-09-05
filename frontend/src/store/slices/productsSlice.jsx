import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../services/productsService.jsx";

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        getFetchProducts : (store,{payload}) => {
            return payload;
        }
    }
});

const {getFetchProducts} = productsSlice.actions;

export const getPlaceholderProducts = () => (dispatch) => {
    getProducts()
        .then(res => res.json())
        .then(data => {
            dispatch(getFetchProducts(data));
        })
}

export default productsSlice.reducer;