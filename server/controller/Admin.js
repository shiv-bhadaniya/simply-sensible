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
 

// update order status
export const updateOrderStatus = async (req,res) => {

    try {
        
        const orderInfo = req.body
        const orderId = orderInfo.orderId
        const orderUpdatingStatus = orderInfo.orderUpdatingStatus
        console.log("Order before update : ", orderInfo);
        
        const updatedOrderInfo = await Order.findByIdAndUpdate(orderId,{orderStatus:orderUpdatingStatus}, {new: true});
        console.log("Order After update status : ", updatedOrderInfo);
        
        if(updatedOrderInfo === null) {
            res.status(200).json("We dont able to update status, Please try after some times.")
        } else {
            res.status(200).json("Order status update successfully.");
        }


    } catch (error) {
        res.status(500).json("Somethig went wrong.");
    }
}




export default router;