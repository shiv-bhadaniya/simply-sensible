import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    shipingInfo: {
        name: String,
        address: String,
        landMark: String,
        city: String,
        state: String,
        country: String,
        pinCode: String,
        phoneNo: String,
    },
    orderItems: [{
        name: String,
        price: Number,
        quantity: Number,
        product: {
            type: mongoose.Schema.ObjectId,
        },
        sku: String,
        weight: String
    }],
    totalAmount: Number,
    user: {
        type: mongoose.Schema.ObjectId,
    },
    paymetInfo: {
        id: String,
        status: String,
        amount: Number,
        currency: String,
    },
    paidAt: Date,
    orderStatus: {
        type: String,
        default: "Processing",
    },
    deliveredAt: Date,
})

const Order = mongoose.model("Order", orderSchema);

export default Order;