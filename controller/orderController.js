import OrderModel from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems,
        shippingAddress,
        itemsPrice,
        totalPrice } = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    }
    else {
        const order = new OrderModel({
            orderItems,
            user: req.user._id,
            shippingAddress,
            itemsPrice,
            totalPrice,
        })
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
})

export { addOrderItems };