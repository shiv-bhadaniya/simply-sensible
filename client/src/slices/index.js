import { combineReducers } from "@reduxjs/toolkit";
import  addNewProductReducer  from "./admin/adminAddNewProduct";
import allProductsReducer from "./user/allProducts.js";



const rootReducer = combineReducers({
    adminAddNewProduct :  addNewProductReducer,
    allProducts : allProductsReducer,
})

export default rootReducer;
