import { combineReducers } from "@reduxjs/toolkit";
import  addNewProductReducer  from "./admin/adminAddNewProduct";
import allProductsReducer from "./user/allProducts.js";
import authUserReducer from "./auth/auth.js";
import cartReducer from "./user/cart";
import cartPriceCalulatorFromServer from "./user/cartPrice";


const rootReducer = combineReducers({
    adminAddNewProduct :  addNewProductReducer,
    allProducts : allProductsReducer,
    authUser : authUserReducer,
    cart : cartReducer,
    cartPriceFromServer : cartPriceCalulatorFromServer,
})

export default rootReducer;
