import mongoose from "mongoose";


const productShema = new mongoose.Schema({

    sku: String,
    name: String,
    discription: String,
    weight: String,
    price : Number,
    categorie: String,
    photo: String,
    productAddedAt: {
        type: Date,
        default: new Date(),
    },
    reviews: [Object],
})

const Product = mongoose.model("Product", productShema);

export default Product;