import express from "express";
const router = express.Router();

import Stripe from "stripe";

const stripe = Stripe("sk_test_51MNE0xSFQdCBkgTcZ3bpvQLX3XabJnRl6sQqWPsiTerwzO7cSitUekaIzmuBAewoXd8ioWxE4BXnA9ZcAVmbRtW100gNofmZaI")

export const paymentProcess = async (req, res) => {

        let myamount = req.body.amount;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: myamount,
            currency: 'inr',
            receipt_email: req.user.email,
        });

        res.status(200).json({ success: true, client_secret: paymentIntent.client_secret });
}

export const sendStripAPIKey = async (req, res) => {


    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });

}

export default router;