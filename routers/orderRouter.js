import { addOrderItems } from "../controller/orderController.js";
import express from "express";
import { protect } from '../middleware.js';

const router = express.Router();
router.route('/').post(protect, addOrderItems);

export default router;