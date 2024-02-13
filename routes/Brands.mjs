import express from "express";

import { fetchAllBrands } from "../controllers/Brands.mjs";
import { createBrands } from "../controllers/Brands.mjs";

const brandRouters = express.Router();

brandRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

brandRouters.get('/',fetchAllBrands).post('/',createBrands);

export default brandRouters ;