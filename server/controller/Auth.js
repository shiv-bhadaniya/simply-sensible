import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();


export const signin = async (req, res) => {


    const { email, password } = req.body;

    try {

        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message : "user not found."})

        const checkPass = await bcrypt.compare(password, user.password);

        if(!checkPass) return res.status(400).json({message : "Password does not match. "});
        
        const token = jwt.sign({email : user.email, id : user._id, isAdmin : user.isAdmin }, process.env.secretKey, { expiresIn: "2 days" } );        
        
        const sendingUserDetails = {
            email : user.email,
            isAdmin : user.isAdmin,
            name : user.name,
            userId: user._id,
        }



        
        const options = {
            httpOnly: false,
        };

        
        res.status(200).cookie("token", token, options).json({
            result : sendingUserDetails, token
        });
        
        console.log("Successfully signin. ");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Something went wrong."});
    }

}


// signup new user
export const signup = async (req, res) => {
    
    const { email, password, confirmPassword, name } = req.body;
    try {
        
        const userExist = await User.findOne({email});

        if(userExist) return res.status(400).json({message : "User already exist. "});

        if(password !== confirmPassword) return res.status(400).json({message : "Password does not match. "});
        
        
        const hasPass = await bcrypt.hash(password, 12);
        

        var ans = email.search("@simplysensible.in");
        var flag = (ans ==-1) ? false : true
        
 

        const newUser = await User.create({email : email, password : hasPass, name: name, isAdmin: flag } );
        console.log(newUser);
        const token = jwt.sign({email : newUser.email, id : newUser._id, isAdmin : newUser.isAdmin }, process.env.secretKey, { expiresIn: "2 days" } );

        const sendingUserDetails = {
            email : email,
            isAdmin : newUser.isAdmin,
            name : name,
            userId: newUser._id,
        }


        const options = {
            httpOnly: false,
        };

        
        res.status(200).cookie("token", token, options).json({
            result : sendingUserDetails, token
        });
        
        console.log("Successfully signup. ");

    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Something went wrong."});
    }
}
export default router;