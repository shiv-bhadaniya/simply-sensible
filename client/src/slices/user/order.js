import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../API/userAPI";

// create new order 

const initialState = {
    orderLoading : false,
    orderError: false,
    orderInfo: {}
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers : {
        orderLoading: (state) => {
            state.orderLoading = true
            state.orderFailur = false
        },
        orderSuccess: (state, { payload }) => {
            state.orderLoading = false
            state.orderError = false
            state.orderInfo = payload
        },
        orderFailur: (state) => {
            state.orderError = true
            state.orderLoading = false
            state.orderInfo = {}
        } 
    }
})


export const createOrder = (newOrderData, navigate) => {

    return async (dispatch) => {

        dispatch(orderLoading());

        try {
           const orderResponse = await API.newOrder(newOrderData);
           console.log("order Response :", orderResponse);
            if(orderResponse.status == 200) {
                dispatch(orderSuccess(orderResponse));
                navigate("user/profile");
            } else {
                dispatch(orderFailur());
            }
        } catch (error) {
            dispatch(orderFailur());
        }
    }
}


export const { orderLoading, orderSuccess, orderFailur } = orderSlice.actions;

export const orderSelector = (state) => state.order;

export default orderSlice.reducer;