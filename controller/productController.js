import ProductModel from '../models/productModel.js';

const getProductsById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

const getProducts = async (req, res) => {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}
export { getProducts, getProductsById };