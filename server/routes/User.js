import express from "express";
import { paymentProcess, sendStripAPIKey } from "../controller/Payment.js";
import { cartPriceCalulate, fetchAllUserOrders, getAllProducts, newOrder } from "../controller/User.js";
import {isAuthenticateUser} from "../middlerware/Auth.js";


const router = express.Router();

router.get("/shop", getAllProducts);
router.post("/shop/cart-details-price-calculate", isAuthenticateUser,cartPriceCalulate);

// payment related
router.post("/shop/checkout/payment",isAuthenticateUser,paymentProcess);
router.get("/shop/checkout/getstripapikey", isAuthenticateUser, sendStripAPIKey);


// order 
router.post("/shop/checkout/order/new", isAuthenticateUser, newOrder);

router.get("/user/profile/order", isAuthenticateUser, fetchAllUserOrders);

export default router;