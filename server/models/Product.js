import mongoose from "mongoose";


const productShema = new mongoose.Schema({

    sku: String,
    name: String,
    discription: String,
    weight: Number,
    price : Number,
    categorie: String,
    photo: String,

})

const Product = mongoose.model("Product", productShema);

export default Product;