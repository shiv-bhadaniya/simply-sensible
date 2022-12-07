import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../API/userAPI.js";


const initialState = {
    loading : false,
    hasError : false,
    data : [],
}



export const getAllProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers : {
        getAllProducts : (state) => {
            state.loading = true
        },
        getAllProductsSuccess : (state, { payload }) => {
            console.log("Successfully load all products from DB.", payload);
            state.loading = false
            state.hasError = false
            state.data = payload
        },
        getAllProductsFailure : (state) => {
            state.loading = false
            state.hasError = true
        },
    }
})

export const fetchAllProducts = () => {

    return async (dispatch) => {
        dispatch(getAllProducts());

        try {
            const response = await API.getAllProducts();
            dispatch(getAllProductsSuccess(response.data));
        } catch (error) {
            dispatch(getAllProductsFailure());
        }
    }
}


export const { getAllProducts, getAllProductsSuccess, getAllProductsFailure } = getAllProductsSlice.actions;

export const allProductSelector  = (state) => state.allProducts; // file name state.<filename> for specific selector

export default getAllProductsSlice.reducer;