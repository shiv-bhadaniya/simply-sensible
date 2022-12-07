import { configureStore } from "@reduxjs/toolkit"; 
import rootReducer from "./index.js";

export default configureStore({
    reducer : rootReducer
})