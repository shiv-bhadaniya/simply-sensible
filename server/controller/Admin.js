import express from "express";
import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";


const router = express.Router();

export const AdmindAddNewProduct = async (req, res) => {

    const productData = req.body;
    console.log("req.body ", req.body);
    const newProduct = new Product({
        ...productData
    })

    try {

        newProduct.save();
        console.log("Successfully added new product to DB.", newProduct);
        res.status(201).json(newProduct);

    } catch (error) {
        console.log("Error to add new product");
    }
}

// get all users 
export const fetchAllUsers = async (req, res) => {

    try {

        const alluser = await User.find();

        res.status(200).json(alluser);

    } catch (error) {
        res.status(500).json("Something went wrong.")
    }

}


// get all orders 

export const fetchAllOrders = async (req, res) => {

    try {

        const allOrders = await Order.find();
        res.status(200).json(allOrders);

    } catch (error) {
        res.status(500).json("Something went wrong.");
    }
}


// delete product - admin
export const deleteProduct = async (req, res) => {

    try {

        console.log("Is secure  : ", req.protocol === 'https');
        const productId = req.params.id;
        const data = await Product.findByIdAndDelete(productId);



        res.status(200).json("Product delete successfully.");

    } catch (error) {
        res.status(500).json("Something went wrong.");
    }
}




export default router;