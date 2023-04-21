// import mongoose from "mongoose";
// import express from 'express';
// import cors from 'cors'
// mongoose.connect('mongodb://localhost:27017/coffee')
//
// //const express = require('express')
// //const cors = require('cors')
// const app = express()
// app.use(cors())
//
// app.get('/coffee/hot/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server Error' });
//     }
// });
// app.get('/coffee/hot', async (req, res) => {
//     try {
//         const response = await fetch('https://api.sampleapis.com/coffee/hot');
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server Error' });
//     }
// });
//
// app.listen(4000, () => {
//     console.log('server running')
// })

import express from 'express';
import cors from 'cors';
import { getProducts, getProductsById } from './controller/productController.js';

const router = express.Router();
router.route('/coffee/hot/').get(getProducts);
router.route('/coffee/hot/:id').get(getProductsById);

const app = express();

app.use(cors());
app.use(router);
app.listen(4000, () => {
  console.log('server running')
});

export default router;

