import { createSlice } from "@reduxjs/toolkit"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import * as API from "../../API/adminAPI";
import { fetchAllProducts } from "../user/allProducts";

const initialState = {
    productDeleteLoading : false,
    productDeleteError : false,
    productDelete: ""
}

export const deleteProductSlice = createSlice({
    name: "productDelete",
    initialState,
    reducers : {
        productDeleteLoading : (state) => {
            state.productDeleteLoading = true
            state.productDeleteError = false
        },
        productDeleteSuccess: (state, {payload}) => {
            state.productDeleteLoading = false
            state.productDeleteError = false
            state.productDelete = payload
            console.log("Product delete from slice.");
            toast.success(payload, {position: "bottom-center"})
        },
        productDeleteFailur: (state, {payload}) => {
            state.productDeleteLoading = false
            state.productDeleteError = true
            state.productDelete = ""
            toast.error(payload, { position: "bottom-center" });
        }
    }
})


export const deleteProduct = (productId, dispatch) => {

    return async (dispatch) => {
        dispatch(productDeleteLoading());
        console.log("delete product id from slice", productId);
        try {
            const response = await API.deleteProduct(productId);
            console.log("delete product response : ", response);
            if(response.status == 200) {
                dispatch(productDeleteSuccess(response.data));
            } else {
                dispatch(productDeleteFailur(response.data));
            }
            dispatch(fetchAllProducts());

        } catch (error) {
            dispatch(productDeleteFailur("Something went wrong. please delete after some time."))
        }
    }
}

export const {productDeleteLoading, productDeleteSuccess, productDeleteFailur} = deleteProductSlice.actions;

export const deleteProductSelector = (state) => state.deleteProduct;

export default deleteProductSlice.reducer;