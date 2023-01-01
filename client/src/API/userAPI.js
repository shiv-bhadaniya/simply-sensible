import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});


export const getAllProducts = () => baseAPI.get("/shop");

export const getCartPrice = (cartDetails) => baseAPI.post("/shop/cart-details-price-calculate", cartDetails);
