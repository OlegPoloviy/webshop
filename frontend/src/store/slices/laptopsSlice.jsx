import {createSlice} from "@reduxjs/toolkit";
import {getLaptops} from "../services/laptopsService.jsx";

const laptopsSlice = createSlice({
    name: "laptops",
    initialState: [],
    reducers: {
        getFetchLaptops : (store,{payload}) => {
            return payload;
        }
    }
});

const {getFetchLaptops} = laptopsSlice.actions;

export const getPlaceholderLaptops = () => (dispatch) => {
    getLaptops()
        .then(res => res.json())
        .then(data => {
            dispatch(getFetchLaptops(data));
        })
}

export default laptopsSlice.reducer;