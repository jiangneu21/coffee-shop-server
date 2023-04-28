
import express from 'express';
import cors from 'cors';

import mongoose from "mongoose";
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
dotenv.config();

const app = express();
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/coffee');


app.get('/', (req, res) => {
    res.send('Server is ready');
    }
);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running`);
});

//export default router;
