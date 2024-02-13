import express from 'express';
import { createProduct } from '../controllers/Product.mjs';
import { fetchProductById } from '../controllers/Product.mjs';
import { fetchProductsByFilters } from '../controllers/Product.mjs';
import { UpdateProduct } from '../controllers/Product.mjs';
const productRouters = express.Router();

productRouters.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
    next();
});

productRouters.post('/',createProduct)
              .get("/",fetchProductsByFilters)
              .get('/:id',fetchProductById)
              .patch('/:id',UpdateProduct);

export default productRouters ;