import mongoose from "mongoose";

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
        type: Date,
        default: new Date(),
    }
    
})


const User = mongoose.model("User", userSchema);

export default User;