import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});




export const addNewProduct = (newProductData) => baseAPI.post("/admin/create/product", newProductData);

export const fetchAllUsers = () => baseAPI.get("/admin/alluser");



// fetch all orders 
export const fetchAllOrders = () => baseAPI.get("/admin/allorders");



