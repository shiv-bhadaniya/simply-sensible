import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const isAuthenticateUser = async (req, res, next) => {


    const { token } = req.cookies;

    if (token) {
        const decodeData = jwt.verify(token, process.env.secretKey);
        req.user = await User.findById(decodeData.id);

        if (!req.user) {
            next(new Error('token not found'))
        }
        next();

    } else {
        next(new Error('token not found'))
    }

}

export const userIsAdmin = async (req, res, next) => {

    const { token } = req.cookies;
    if (token) {
        const decodeData = jwt.verify(token, process.env.secretKey);
        req.user = await User.findById(decodeData.id);

        if (!req.user) {
            next(new Error('user not found'))
        }

        if(req.user.isAdmin) {
            next();
        } else {
            next(new Error('Only for admin'))
        }
        
    } else {
        next(new Error('token not found'))
    }

}


