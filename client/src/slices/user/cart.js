import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartLoading: false,
  cartHasError: false,
  cartItems: [],
  shipingInfo: {}
}

export const getCartDetailsSlice = createSlice({
  name: "cart",
  initialState,
  reducers : {
    cart : (state) => {
      console.log("cart Loadind called.");
      state.cartLoading = true
    },
    cartSuccess : (state, { payload }) => {
      console.log("item from cartSuccess : ", payload);
      state.cartLoading = false
      state.cartHasError = false

      const isItemExist = state.cartItems.find(
        (i) => i._id === payload._id
      );

      if (isItemExist) {
        console.log("Find it");
        state.cartItems = state.cartItems.map((i) =>
        i._id === isItemExist._id ? payload : i
        )
      } else {
        state.cartItems = [...state.cartItems, payload]
      }
    },
    cartFailure : (state) => {
      state.cartLoading = false
      state.cartHasError = true
    },
    cartProductRemove: (state, { payload }) => {
      console.log("inside cartProductRemove", payload);
      state.cartItems = state.cartItems.filter((product) => product._id !== payload)
      state.cartLoading = false
      state.cartHasError = false
    },
    loadProducts : (state, { payload }) => {
      state.cartItems = payload
      state.cartLoading = false
      state.cartHasError = false
    },
    saveShippingInformation : (state, {payload}) => {
      state.cartLoading = false
      state.cartHasError = false
      state.shipingInfo = payload
    }
  }
})


export const AddToCart = (data) => {

  return async (dispatch) => {

    dispatch(cart())

    try {
      dispatch(cartSuccess(data));
    } catch (error) {
      dispatch(cartFailure());
    }
  }
}

export const quantityIncrement  = (data) => {
    
  return async (dispatch) => {

    dispatch(cart());

    try {
      let currentQuantity = data.quantity
      currentQuantity = currentQuantity + 1;
      data.quantity = currentQuantity
      console.log("Data before called success and increase quantity : ", data);
      dispatch(cartSuccess(data));
    } catch (error) {
      dispatch(cartFailure());
    }
  }
}


export const quantityDecrement = (data) => {

  return async (dispatch) => {

    dispatch(cart());

    try {
      let currentQuantity = data.quantity
      currentQuantity = currentQuantity - 1;
      data.quantity = currentQuantity
      console.log("Data before called success and decrease quantity : ", data);
      dispatch(cartSuccess(data));
    } catch (error) {
      dispatch(cartFailure());
    }
  }
} 

export const removeProduct = (productId) => {

    return async (dispatch) => {

      dispatch(cart());

      try {
        dispatch(cartProductRemove(productId));
      } catch (error) {
        dispatch(cartFailure());
      }
    }
}

export const saveShippingInfo = (data) => {

  return async (dispatch) => {

    dispatch(cart());

    try {
      dispatch(saveShippingInformation());
      localStorage.setItem("shippingInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(cartFailure());
    }
  }
}

export const loadProductIntoRedux = (products) => {

  return async (dispatch) => {

    dispatch(cart());

    try {
      dispatch(loadProducts(products));
    } catch (error) {
      dispatch(cartFailure());
    }
  }
}

export const { cart, cartSuccess, cartFailure, cartProductRemove, loadProducts, saveShippingInformation } = getCartDetailsSlice.actions;

export const cartSelector = (state) => state.cart;

export default getCartDetailsSlice.reducer;