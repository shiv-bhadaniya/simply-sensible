import { createSlice } from "@reduxjs/toolkit"
import { getCartPrice } from "../../API/userAPI";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


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
            toast.error('Something went wrong', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            state.loadingCartPriceFromSever = false
            state.errorCalculateingPriceFromServer = true
            state.cartPriceWithFinalAmountFromServer = 0
        }
    }
})

export const calculateCartFinalPriceFromServer = (cartDetails, navigate) => {

    return async (dispatch) => {

        dispatch(cartPriceCalculatingFromServer());

        try {
            const finalPrice = await getCartPrice(cartDetails);
            if(finalPrice == 0) {
                throw Error
            }
            dispatch(cartPriceCalulateFromServerSucccess(finalPrice.data));            
            navigate("/shop/checkout")
        } catch (error) {
            dispatch(cartPriceCalulateFromServerFailure());
            navigate("/shop");
        }
    }
}

export const { cartPriceCalculatingFromServer, cartPriceCalulateFromServerSucccess, cartPriceCalulateFromServerFailure } = cartPriceCalulaterFromServerSlice.actions;

export const cartPriceCalulatorFromServerSelector = (state) => state.cartPriceCalculatorFromServer;

export default cartPriceCalulaterFromServerSlice.reducer;