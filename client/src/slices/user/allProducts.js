import { createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import * as API from "../../API/userAPI.js";


const initialState = {
    loading: false,
    hasError: false,
    data: [],
    filterData: []
}



export const getAllProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        getAllProducts: (state) => {
            state.loading = true
        },
        getAllProductsSuccess: (state, { payload }) => {
            console.log("Successfully load all products from DB.", payload);
            state.loading = false
            state.hasError = false
            state.data = payload
            state.filterData = payload
        },
        getAllProductsFailure: (state) => {
            state.loading = false
            state.hasError = true
        },
        filterProduct: (state, { payload }) => {
            
            let allProducts = JSON.parse(JSON.stringify(state.data))
            var allProductsArray = Array.from(allProducts)
            
            if(payload == "all") {
                state.filterData = allProductsArray
                return
            }

            let filterProducts = allProductsArray.filter(item => item.categorie == payload);

            state.filterData = filterProducts
        },
        stopLoading: (state) => {
            state.loading = false
        }
    }
})

export const fetchAllProducts = () => {

    return async (dispatch) => {
        dispatch(getAllProducts());

        try {
            const response = await API.getAllProducts();
            dispatch(getAllProductsSuccess(response.data));
        } catch (error) {
            dispatch(getAllProductsFailure());
        }
    }
}

export const fetchFilterProducts = (filterDemand) => {

    return (dispatch) => {
        dispatch(getAllProducts());

        dispatch(filterProduct(filterDemand));
        dispatch(stopLoading());

    }
}


export const { getAllProducts, getAllProductsSuccess, getAllProductsFailure, filterProduct, stopLoading } = getAllProductsSlice.actions;

export const allProductSelector = (state) => state.allProducts; 
export default getAllProductsSlice.reducer;