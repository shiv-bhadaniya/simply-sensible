import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../API/userAPI";

// get product details 

const initialState = {
    productDetailsLoading : false,
    productDetailsError : false,
    productDetails: []
}

export const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers : {
        productDetailsLoading: (state) => {
            state.productDetailsLoading = true
            state.productDetailsError = false
        },
        productDetailsSuccess: (state, { payload }) => {
            state.productDetailsLoading = false
            state.productDetailsError = false
            state.productDetails = payload
        },
        productDetailsFailur: (state) => {
            state.productDetailsError = true
            state.productDetailsLoading = false
            state.productDetails = {}
        } 
    }
})


export const getProductDetails = (productId) => {

    return async (dispatch) => {

        dispatch(productDetailsLoading());

        try {
            console.log("From product detila slice : ", productId);
            const response = await API.getProductDetails(productId);
            if(response.data !== null) {
                dispatch(productDetailsSuccess(response.data));
            } else {
                dispatch(productDetailsFailur(response.data));
            }
        } catch (error) {
            dispatch(productDetailsFailur("Something went wrong please try after some times."));
        }
    }
}


export const { productDetailsLoading, productDetailsSuccess, productDetailsFailur } = productDetailsSlice.actions;

export const productDetailsSelector = (state) => state.productDetails;

export default productDetailsSlice.reducer;