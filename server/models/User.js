import mongoose from "mongoose";
import moment from 'moment';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        localStorage: true
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default : false
    },
    createdAt: {
        type: String,
        default: moment().format("MMM Do YYYY"),
    }
    
})


const User = mongoose.model("User", userSchema);

export default User;