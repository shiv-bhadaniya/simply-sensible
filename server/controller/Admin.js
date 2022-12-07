import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";


const router = express.Router();


export const AdmindAddNewProduct = async (req, res) => {

    const productData = req.body;

    const newProduct= new Product( {
        ...productData
    })

    try {

        newProduct.save();
        console.log("Successfully added new product to DB.", newProduct);
        res.status(201).json(newProduct);
        
    } catch (error) {
        console.log("Error toa add new product");
    }
}

export default router;