import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,   // for cookies
});


export const authUserSignin = (authData) => baseAPI.post("/user/auth/signin", authData);
export const authUserSignup = (authData) => baseAPI.post("/user/auth/signup", authData);
