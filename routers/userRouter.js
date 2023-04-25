// import express from "express";
// import login from "../controller/userController.js";

// const router = express.Router();
// router.post('/login', login);

// export default router;

import express from "express";

import User from '../models/userModel.js';
import {login, profile, register} from '../controller/userController.js';
//import  login from "../controller/userController.js";
import { protect } from '../middleware.js';
const router = express.Router();

router.post('/login', login);
router.route('/profile').get(protect, profile);
router.route('/').post(register);
export default router;