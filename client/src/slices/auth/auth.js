import { createSlice } from "@reduxjs/toolkit"
import * as API from "../../API/Auth.js";


const initialState = {
    loading : false,
    hasError : false,
    data : [],
}


export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers : {
        authUser : (state) => {
            state.loading = true
        },
        authUserSuccess : (state, { payload }) => {
            console.log(" Authentication succesfully. ", payload);
            localStorage.setItem("profile", JSON.stringify({ ...payload }));
            state.loading = false
            state.hasError = false
            state.data = payload
        },
        authUserFailure : (state, { msg }) => {
            console.log(" Authentication failure. ", msg);
            state.loading = false
            state.hasError = true
            alert("Something went wrong.");
        },
        logout : (state) => {
            state.data = [];
            localStorage.removeItem("profile");
        }
    }
})


export const authUserSignin = (data, navigate) => {

    return async (dispatch) => {
        dispatch(authUser());

        var response = null;
        try {
            response = await API.authUserSignin(data);
            console.log("response from try: ", response);
            if(!response.data.token) {
                throw Error;
            }
            dispatch(authUserSuccess(response.data));
            navigate("/");
        } catch (error) {
            dispatch(authUserFailure(response));
        }
    }
}

export const authUserSignup = (data, navigate) => {

    return async (dispatch) => {
        dispatch(authUser());

        try {
            const response = await API.authUserSignup(data);
            console.log("response from try : ", response);
            if(!response.data.token) {
                throw Error;
            }
            dispatch(authUserSuccess(response.data));
            navigate("/");
        } catch (error) {
            dispatch(authUserFailure());
        }
    }
}

export const authLogout = () => {

    return async(dispatch) => {

        dispatch(authUser());

        try {
            dispatch(logout());
        } catch (error) {
            dispatch(authUserFailure());
        }
    }
}

export const { authUser, authUserSuccess, authUserFailure, logout } = AuthSlice.actions;

export const authUserSelector = (state) => state.authUser;

export default AuthSlice.reducer;