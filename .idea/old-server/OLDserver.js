/*const express = require('express')
const cors = require('cors')*/

import express from 'express';
import cors from 'cors';
import products from "./data/products.js";
import session from 'express-session';
import usersController from "./controllers/usersController.js";

const app = express();

app.use(cors())
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.get('/coffee/hot/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
app.get('/coffee/hot', async (req, res) => {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

app.get('/api/products', (req, res) => {
    res.json(products);
} )

app.use(session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
}));

app.use(cors({
    credentials: true,
    origin: "http://localhost:3001",
}));
app.use(express.json());
const port = process.env.PORT || 4000;

usersController(app);

app.listen(port);



