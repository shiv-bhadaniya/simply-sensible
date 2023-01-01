import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default : false
    }
    
})


const User = mongoose.model("User", userSchema);

export default User;