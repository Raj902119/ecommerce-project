import express from "express";

import { fetchUserById } from "../controllers/User.mjs";
import { UpdateUserProfile } from "../controllers/User.mjs";

const userRouters = express.Router();

userRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

userRouters.get('/own',fetchUserById)
           .patch('/:id',UpdateUserProfile);

export default userRouters;
