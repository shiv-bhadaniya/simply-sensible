import mongoose from "mongoose";
import moment from 'moment';


const productShema = new mongoose.Schema({

    sku: String,
    name: String,
    discription: String,
    weight: String,
    price : Number,
    categorie: String,
    photo: String,
    productAddedAt: {
        type: String,
        default: moment().format("MMM Do YYYY"),
    },
    reviews: [Object],
})

const Product = mongoose.model("Product", productShema);

export default Product;