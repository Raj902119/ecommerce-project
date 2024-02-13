import express from "express";
import { payment } from "../controllers/Payment.mjs";
import { paymentVerification } from "../controllers/Payment.mjs";

const paymentRouters = express.Router();

paymentRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

paymentRouters.post('/createOrder',payment)
              .post('/paymentVerification',paymentVerification);

export default paymentRouters;            