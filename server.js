import express from 'express';
import cors from 'cors';
import session from 'express-session';
import {login, logout, register, getProfile, updateProfile, getUserList} from "./controllers/usersController.js";
import mongoose from "mongoose";

/*const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;*/
// mongoose.connect('mongodb://127.0.0.1:27017/coffee-shop');


const app = express();
const router = express.Router();

app.get('/api/users', async (req, res) => {
    try {
        const response = await mongoose.connect('mongodb://127.0.0.1:27017/coffee-shop/users');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
// app.use('/api',router);
// router.post('/users/login', login);
// router.post('/users/logout', logout);
// router.post('/users/register', register);
// router.get('/users/profile', getProfile);
// router.put('/users/profile', updateProfile);
// router.get('/admin', getUserList);

app.get('/', (req, res) => {
     res.send('Hello World!');
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
app.use(cors());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));
app.use(express.json());

app.listen(4000)