import ProductModel from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const getProductsById = asyncHandler (async (req, res) => {
    // const id = req.params.id;
    // try {
    //     const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
    //     const data = await response.json();
    //     res.json(data);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Server Error' });
    // }
    const product = await ProductModel.findById(req.params.id);
    //const product = await ProductModel.find(p => p._id === req.params.id )
    
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
    
})

const getProducts = asyncHandler(async (req, res) => {
    // try {
    //     const response = await fetch('https://api.sampleapis.com/coffee/hot');
    //     const data = await response.json();
    //     res.json(data);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Server Error' });
    // }
    const products = await ProductModel.find({});
    res.json(products);

})
export { getProducts, getProductsById };