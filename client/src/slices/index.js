import { combineReducers } from "@reduxjs/toolkit";
import  addNewProductReducer  from "./admin/adminAddNewProduct";
import allProductsReducer from "./user/allProducts.js";
import authUserReducer from "./auth/auth.js";
import cartReducer from "./user/cart";
import cartPriceCalulatorFromServer from "./user/cartPrice";
import orderReducer from "./user/order";
import  fetchUserOrderReducer  from "./user/fetchOrder";
import fetchAllUsers from "./admin/user";
import fetchAllOrders from "./admin/order";

const rootReducer = combineReducers({
    adminAddNewProduct :  addNewProductReducer,
    allProducts : allProductsReducer,
    authUser : authUserReducer,
    cart : cartReducer,
    cartPriceFromServer : cartPriceCalulatorFromServer,
    order: orderReducer,
    userOrder: fetchUserOrderReducer,
    allUsers: fetchAllUsers,
    allOrders: fetchAllOrders,
})

export default rootReducer;
