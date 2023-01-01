import { createSlice } from '@reduxjs/toolkit';
import * as API from "../../API/adminAPI.js";

const initialState = {
    loading : false,
    hasError : false,
    data : [],
}

export const addNewProductSlice = createSlice({
    name: "newProduct",
    initialState,
    reducers : {
        addNewProduct : (state) => {
            state.loading = true
        },
        addNewProductSuccess : (state, { payload }) => {
            console.log("Successfully addNewProductSuccess Called");
            state.loading = false
            state.hasError = false
            state.data = payload
        },
        addNewProductFailure : (state) => {
            state.loading = false
            state.hasError = true
        }
    }
})


export const adminAddNewProduct = (data, navigate) => {

    return async (dispatch) => {
        dispatch(addNewProduct());

        try {
            const response = await API.addNewProduct(data);
            console.log("res from server after add new product : ", response.data);
            dispatch(addNewProductSuccess(response.data));
            navigate("/shop")
        } catch (error) {
            dispatch(addNewProductFailure());
        }
    }
} 


export const { addNewProduct, addNewProductSuccess, addNewProductFailure } = addNewProductSlice.actions;

export const addNewProductDataSelector = (state) => state.adminAddNewProduct;

export default addNewProductSlice.reducer;


