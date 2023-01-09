import express from "express";
import { AdmindAddNewProduct, fetchAllOrders, fetchAllUsers } from "../controller/Admin.js";
import { isAuthenticateUser, userIsAdmin } from "../middlerware/Auth.js";


const router = express.Router();

router.post("/create/product", userIsAdmin ,AdmindAddNewProduct);
router.get("/alluser", isAuthenticateUser, userIsAdmin, fetchAllUsers);
router.get("/allorders", isAuthenticateUser, userIsAdmin, fetchAllOrders);

export default router;