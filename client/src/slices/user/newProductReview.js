import { createSlice } from "@reduxjs/toolkit"
import * as API from "../../API/userAPI";

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
        },
        newProductReviewFailur: (state, { payload }) => {
            state.newProductReviewLoading = false
            state.newProductReviewError = true
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