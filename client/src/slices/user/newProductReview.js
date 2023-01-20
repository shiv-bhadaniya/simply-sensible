import { createSlice } from "@reduxjs/toolkit"
import * as API from "../../API/userAPI";
import { getProductDetails } from "./productDetails";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const initialState = {
    newProductReviewLoading: false,
    newProductReviewError: false,
    newProductReviewData: {}
}

export const newProductReviewSlice = createSlice({
    name: "newProductReview",
    initialState,
    reducers: {
        newProductReviewLoading: (state) => {
            state.newProductReviewLoading = true
            state.newProductReviewError = false
        },
        newProductReviewSuccess: (state, { payload }) => {
            state.newProductReviewLoading = false
            state.newProductReviewError = false
            state.newProductReviewData = payload
            toast.success("Product review submit successfully", {position:"bottom-center"});
        },
        newProductReviewFailur: (state, { payload }) => {
            state.newProductReviewLoading = false
            state.newProductReviewError = true
            toast.error(payload, {position: "bottom-center"});
        }
    }
})

export const newProductReview = (productId, reviewData) => {

    return async (dispatch) => {
        try {
            console.log("Come to slice : ", productId, reviewData );
            const response = await API.newProductReview(productId, reviewData);

            if (response.data !== null) {
                dispatch(newProductReviewSuccess(response.data));
                dispatch(getProductDetails(response.data._id));
            } else {
                dispatch(newProductReviewFailur(response.data));
            }
        } catch (error) {
            dispatch(newProductReviewFailur("Something went wrong"));
        }
    }
}


export const { newProductReviewLoading, newProductReviewSuccess, newProductReviewFailur } = newProductReviewSlice.actions;

export const newProductReviewSelector = (state) => state.newProductReview;

export default newProductReviewSlice.reducer;