import express from "express";
import mongoose from "mongoose";
import Product  from "../models/Product.js";

const router = express.Router();


export const getAllProducts = async (req, res) => {

    try {
        const allProducts = await  Product.find();
        res.status(200).json(allProducts)
        console.log("all products from server", allProducts);
    } catch (error) {
        res.json("Error");
    }

}

export default router;