import express from "express";
import { cartPriceCalulate, getAllProducts } from "../controller/User.js";


const router = express.Router();

router.get("/shop", getAllProducts);
router.post("/shop/cart-details-price-calculate", cartPriceCalulate);

export default router;