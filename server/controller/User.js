import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

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
    console.log("Cookie  : ", req.cookies);
    // console.log("Cart item from server : ", cartItems);
    try {

        var cartItemsIds = [];

        // find all ides of cart items so we can perfom find 
        for (let i = 0; i < cartItems.length; i++) {
            let itemId = cartItems[i]._id;
            cartItemsIds.push(itemId);
        }


        let dbProduct = await Product.find({
            '_id': {
                $in: cartItemsIds
            }
        });

        var subTotal = 0;

        // console.log("finded all cart product from db. ", dbProduct);

        for(let i = 0; i < cartItems.length; i++) {
            for(let j = 0; j < dbProduct.length; j++) {
                console.log(dbProduct[j]._id);
                if((cartItems[i]._id) == (dbProduct[j]._id)) {
                    console.log("Find match product.");
                    let onItemPrice = (dbProduct[j].price * cartItems[i].quantity);
                    console.log("One times total : ", onItemPrice);
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

export default router;