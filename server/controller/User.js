import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
const router = express.Router();


export const getAllProducts = async (req, res) => {

    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts)
    } catch (error) {
        res.json("Error");
    }

}

export const cartPriceCalulate = async (req, res) => {

    const cartItems = req.body;

    try {

        var cartItemsIds = [];

        // find all ides of cart items so we can perfom find 
        for (let i = 0; i < cartItems.length; i++) {
            let itemId = cartItems[i]._id;
            cartItemsIds.push(itemId);
        }

        console.log("cartitem ids : ", cartItemsIds);


        let dbProduct = await Product.find({
            '_id': {
                $in: cartItemsIds
            }
        });


        if (dbProduct.length !== cartItems.length) {
            throw new Error("Product not find.");
        }

        var subTotal = 0;


        for (let i = 0; i < cartItems.length; i++) {
            for (let j = 0; j < dbProduct.length; j++) {
                if ((cartItems[i]._id) == (dbProduct[j]._id)) {
                    let onItemPrice = (dbProduct[j].price * cartItems[i].quantity);
                    subTotal = subTotal + onItemPrice;
                }
            }
        }

        var total = subTotal + 80;

        console.log("calculate with db. Total with other charges :", total);

        res.status(200).json(total);

    } catch (error) {
        res.json("Error");
    }
}

export const newOrder = async (req, res) => {

    console.log("new order req : ", req.body);

    const {
        shipingInfo,
        orderItems,
        totalAmount,
        paymetInfo,
    } = req.body;

    try {

        const order = await Order.create({
            shipingInfo,
            orderItems,
            paymetInfo,
            totalAmount,
            paidAt: Date.now(),
            user: req.user._id,
        })

        res.status(200).json({ order })

    } catch (error) {
        res.json({ "message": "Something went wrong." });
    }
}

export const fetchAllUserOrders = async (req, res) => {

    try {

        let userId = req.user._id;

        const userOrders = await Order.find({ user: userId });
        if (userOrders.length !== 0) {
            res.status(200).json(userOrders);
        } else {
            res.status(200).json("Not order yet.")
        }
    } catch (error) {
        res.status(500).json("Something went wrog.")
    }
}

// new product review
export const newProductReview = async (req, res) => {

    const productId = req.params.productId;
    const reviewData = req.body;


    try {

        const updatedProductWithReviews = await Product.findByIdAndUpdate(productId, {
            $push: {
                reviews: {
                    "rating": reviewData?.rating,
                    "review": reviewData?.review,
                    user: {
                        "userId": reviewData?.user?.userId,
                        "name": reviewData?.user?.name,
                        "email": reviewData?.user?.email,
                    },
                }
            }
        }, { new: true });

        const product = await Product.findById(productId);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json("Something went wrong..");
    }
}


export default router;