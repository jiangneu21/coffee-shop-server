import express from "express";
import products from "../models/productModel.js";
import { getProducts, getProductsById } from "../controller/productController.js";
const router = express.Router();

import asyncHandler from 'express-async-handler'

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

// router.get('/', asyncHandler(async (req, res) => {
//     const productList = await products.find({})
//     res.json(productList)
// }))

// router.get('/:id', asyncHandler(async (req, res) => {
//     const product = products.findById(req.params.id)
//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({ message: 'Product not found' })
//     }
//     //res.json(product)
// }));
export default router;