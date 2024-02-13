import express from "express";
import { addToCart } from "../controllers/Cart.mjs";
import { fetchCartByUser } from "../controllers/Cart.mjs";
import { deleteFromCart } from "../controllers/Cart.mjs";
import { updateCart } from "../controllers/Cart.mjs";

const cartRouters = express.Router();

cartRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

cartRouters.get('/',fetchCartByUser)
           .post('/',addToCart)
           .delete('/:id',deleteFromCart)
           .patch('/:id',updateCart);

export default cartRouters ;