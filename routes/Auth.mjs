import express from "express";
import passport from "passport";
import { createUser } from "../controllers/Auth.mjs";
import { loginUser } from "../controllers/Auth.mjs";
import { checkAuth } from "../controllers/Auth.mjs";
const authRouters = express.Router();

authRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

authRouters.post("/signup",createUser)
           .post("/login",passport.authenticate('local'),loginUser)
           .get('/check',passport.authenticate('jwt'),checkAuth);

export default authRouters;