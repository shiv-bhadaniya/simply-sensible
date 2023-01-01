import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser  from 'cookie-parser'

import adminRouter from "./routes/Admin.js";
import userRouter from "./routes/User.js";
import authRoute from "./routes/Auth.js";



const app = express();
app.use(cookieParser())

const corsOption = {
    corsOptions:true,
    origin: true, //included origin as true
    credentials: true, //included credentials as true
}
app.use(cors(corsOption));



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/user", authRoute);
app.use("/admin", adminRouter);


const PORT = process.env.PORT;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

mongoose.connect(DB_CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running and Database connect successfully.`);
    });   
}).catch((err) => {
    console.log(err);
})