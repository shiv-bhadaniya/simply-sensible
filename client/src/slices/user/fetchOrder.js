import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../API/userAPI";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// get user's all orders 

const initialState = {
    fetchUserOrderLoading: false,
    fetchUserOrderError: false,
    fetchUserOrder: []
}

export const fetchUserOrderSlice = createSlice({
    name: "fetchUserOrder",
    initialState,
    reducers: {
        fetchOrderLoading: (state) => {
            state.fetchUserOrderLoading = true
            state.fetchUserOrderError = false
        },
        fetchOrderSuccess: (state, { payload }) => {
            state.fetchUserOrderLoading = false
            state.fetchUserOrderError = false
            state.fetchUserOrder = payload
        },
        fetchOrderFailur: (state, { payload }) => {
            state.fetchUserOrderLoading = false
            state.fetchUserOrderError = true
            toast.error(payload, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        },
        NotOrderYet: (state, {payload}) => {
            state.fetchUserOrderLoading = false
            state.fetchUserOrderError = false
            state.fetchUserOrder = []
            toast(payload, {position: "bottom-center"});
        }
    }
})

export const fetchAllUserOrders = (navigate) => {

    return async (dispatch) => {

        dispatch(fetchOrderLoading());

        try {

            const userAllOrder = await API.getAllUserOrder();
    
            if(userAllOrder.status === 200 && (Array.isArray(userAllOrder.data))) {
                dispatch(fetchOrderSuccess(userAllOrder.data));
            } else  {
                dispatch(NotOrderYet(userAllOrder.data));
                navigate("/user/profile");
            }

            console.log(userAllOrder);

        } catch (error) {
            dispatch(fetchOrderFailur("Something went wrong."))
        }

    }
}

export const { fetchOrderLoading, fetchOrderSuccess, fetchOrderFailur, NotOrderYet } = fetchUserOrderSlice.actions;

export const fetchUserOrderSelector = (state) => state.userOrder;

export default fetchUserOrderSlice.reducer;