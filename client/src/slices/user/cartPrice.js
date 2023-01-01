import { createSlice } from "@reduxjs/toolkit"
import { getCartPrice } from "../../API/userAPI";

const initialState = {
    loadingCartPriceFromSever: false,
    cartPriceWithFinalAmountFromServer: 0,
    errorCalculateingPriceFromServer: false
}

export const cartPriceCalulaterFromServerSlice = createSlice({
    name: "cartPriceCalculatorFromServer",
    initialState,
    reducers : {
        cartPriceCalculatingFromServer : (state) => {
            state.loadingCartPriceFromSever = true
        },
        cartPriceCalulateFromServerSucccess : (state, {payload}) => {
            state.loadingCartPriceFromSever = false
            state.errorCalculateingPriceFromServer = false
            state.cartPriceWithFinalAmountFromServer = payload
        },
        cartPriceCalulateFromServerFailure : (state) => {
            state.loadingCartPriceFromSever = false
            state.errorCalculateingPriceFromServer = true
            state.cartPriceWithFinalAmountFromServer = 0
        }
    }
})

export const calculateCartFinalPriceFromServer = (cartDetails) => {

    return async (dispatch) => {

        dispatch(cartPriceCalculatingFromServer());

        try {
            const finalPrice = await getCartPrice(cartDetails);
            dispatch(cartPriceCalulateFromServerSucccess(finalPrice.data));            
        } catch (error) {
            dispatch(cartPriceCalulateFromServerFailure());
        }
    }
}

export const { cartPriceCalculatingFromServer, cartPriceCalulateFromServerSucccess, cartPriceCalulateFromServerFailure } = cartPriceCalulaterFromServerSlice.actions;

export const cartPriceCalulatorFromServerSelector = (state) => state.cartPriceCalculatorFromServer;

export default cartPriceCalulaterFromServerSlice.reducer;