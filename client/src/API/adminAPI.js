import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
});




export const addNewProduct = (newProductData) => baseAPI.post("/admin/addNewProduct", newProductData);


