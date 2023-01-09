import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import * as API from "../../API/adminAPI";

const initialState = {
    allUsersLoading : false,
    allUsersError : false,
    allUsers: [],
}

export const allUsersSlice = createSlice({
    name: "allUser",
    initialState,
    reducers : {
        allUserLoading : (state) => {
            state.allUsersLoading = true
            state.allUsersError = false
        },
        alluserSuccess: (state, {payload}) => {
            state.allUsersLoading = false
            state.allUsersError = false
            state.allUsers = payload
        },
        allUserFailur: (state, {payload}) => {
            state.allUsersLoading = false
            state.allUsersError = true
            toast.error(payload, { position: "bottom-center" });
        }
    }
})


export const fetchAllUsers = () => {

    return async (dispatch) => {
        dispatch(allUserLoading());

        try {
            const response = await API.fetchAllUsers();

            if(response.status === 200) {
                dispatch(alluserSuccess(response.data));
            } else {
                dispatch(allUserFailur(response.data));
            }

        } catch (error) {
            dispatch(allUserFailur("Something went wrong."))
        }
    }
}

export const {allUserLoading, alluserSuccess, allUserFailur} = allUsersSlice.actions;

export const allUsersSelector = (state) => state.allusers;

export default allUsersSlice.reducer;