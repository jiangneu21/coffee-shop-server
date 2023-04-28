// import express from "express";
// import login from "../controller/userController.js";

// const router = express.Router();
// router.post('/login', login);

// export default router;

import express from "express";
import { deleteUser, getUsers } from "../controller/userController.js";
import { protect, admin } from '../middleware.js';

import User from '../models/userModel.js';
import {login, profile, register, updateUserProfile} from '../controller/userController.js';
//import  login from "../controller/userController.js";

const router = express.Router();

router.post('/login', login);
router.route('/profile').get(protect, profile).put(protect, updateUserProfile);
router.route('/').post(register).get(protect, admin, getUsers);
router.route('/:id').delete(protect, admin, deleteUser);


export default router;