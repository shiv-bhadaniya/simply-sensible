import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import * as API from "../../API/adminAPI";
import { fetchAllOrders } from "./order";

const initialState = {
    orderStatusUpdateLoading : false,
    orderStatusUpdateError : false,
    orderStatusUpdated: [],
}

export const orderStatusUpdateSlice = createSlice({
    name: "orderStatusUpdate",
    initialState,
    reducers : {
        orderStatusUpdateLoading : (state) => {
            state.orderStatusUpdateLoading = true
            state.orderStatusUpdateError = false
        },
        orderStatusUpdateSuccess: (state, {payload}) => {
            state.orderStatusUpdateLoading = false
            state.orderStatusUpdateError = false
            state.orderStatusUpdated = payload
            toast.success("Order Status updated suucessfully.", {position: "bottom-center"});
        },
        orderStatusUpdateFailur: (state, {payload}) => {
            state.orderStatusUpdateLoading = false
            state.orderStatusUpdateError = true
            toast.error(payload, {position: "bottom-center"});
        }
    }
})


export const updateOrderStatus = (orderInfo) => {

    return async (dispatch) => {
        
        dispatch(orderStatusUpdateLoading());

        try {

            const response = await API.editOrderStatus(orderInfo);

            if(response.data !== null) {
                dispatch(orderStatusUpdateSuccess(response.data));
                dispatch(fetchAllOrders())
            } else {
                dispatch(orderStatusUpdateFailur(response.data));
            }

        } catch (error) {
           dispatch(orderStatusUpdateFailur("Something went wrong."));
        }
    }
}

export const { orderStatusUpdateLoading, orderStatusUpdateSuccess, orderStatusUpdateFailur } = orderStatusUpdateSlice.actions;

export const orderStatusUpdateSelector = (state) => state.orderStatusUpdate;

export default orderStatusUpdateSlice.reducer;