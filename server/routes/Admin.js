import express from "express";
import { AdmindAddNewProduct } from "../controller/Admin.js";


const router = express.Router();

router.post("/addNewProduct", AdmindAddNewProduct);

export default router;