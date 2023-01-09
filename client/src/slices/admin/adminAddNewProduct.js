import { createSlice } from '@reduxjs/toolkit';
import * as API from "../../API/adminAPI.js";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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
            state.loading = false
            state.hasError = false
            state.data = payload
            toast.success('Successfully new product added.', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        },
        addNewProductFailure : (state) => {
            state.loading = false
            state.hasError = true
            toast.error('You are not admin ', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
    }
})


export const adminAddNewProduct = (data, navigate) => {

    return async (dispatch) => {
        dispatch(addNewProduct());

        try {
            const response = await API.addNewProduct(data);
            console.log("res from server after add new product : ", response);
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


