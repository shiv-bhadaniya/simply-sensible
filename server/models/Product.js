import mongoose from "mongoose";


const productShema = new mongoose.Schema({

    sku: String,
    name: String,
    discription: String,
    weight: Number,
    price : Number,
    categorie: String,
    photo: String,
    productAddedAt: {
        type: Date,
        default: new Date(),
    }
})

const Product = mongoose.model("Product", productShema);

export default Product;