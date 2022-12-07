import express from "express";
import { getAllProducts } from "../controller/User.js";


const router = express.Router();

router.get("/shop", getAllProducts);

export default router;