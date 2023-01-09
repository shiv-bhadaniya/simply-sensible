import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import * as API from "../../API/adminAPI";

const initialState = {
    allOrdersLoading : false,
    allOrdersError : false,
    allOrders: [],
}

export const allOrdersSlice = createSlice({
    name: "allUser",
    initialState,
    reducers : {
        allOrdersLoading : (state) => {
            state.allOrdersLoading = true
            state.allOrdersError = false
        },
        allOrdersSuccess: (state, {payload}) => {
            state.allOrdersLoading = false
            state.allOrdersError = false
            state.allOrders = payload
        },
        allOrdersFailur: (state, {payload}) => {
            state.allOrdersLoading = false
            state.allOrdersError = true
            toast.error(payload, { position: "bottom-center" });
        }
    }
})


export const fetchAllOrders = () => {

    return async (dispatch) => {
        dispatch(allOrdersLoading());

        try {
            const response = await API.fetchAllOrders();

            if(response.status === 200) {
                dispatch(allOrdersSuccess(response.data));
            } else {
                dispatch(allOrdersFailur(response.data));
            }

        } catch (error) {
            dispatch(allOrdersFailur("Something went wrong."))
        }
    }
}

export const {allOrdersLoading, allOrdersSuccess, allOrdersFailur} = allOrdersSlice.actions;

export const allOrdersSelector = (state) => state.allOrders;

export default allOrdersSlice.reducer;