import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
                                        user: {
                                            type: mongoose.Schema.Types.ObjectId,
                                            required: true,
                                            ref: 'User'
                                        },
                                        orderItems: [
                                            {
                                                name: {
                                                    type: String,
                                                    required: true
                                                },
                                                qty: {
                                                    type: Number,
                                                    required: true
                                                },
                                                image: {
                                                    type: String,
                                                    required: true
                                                },
                                                price: {
                                                    type: Number,
                                                    required: true,
                                                    default: 3.99
                                                },
                                                product: {
                                                    type: mongoose.Schema.Types.ObjectId,
                                                    required: true,
                                                    ref: 'Product'
                                                }

                                            }
                                        ],
                                        paymentMethod: {
                                            type: String,
                                            required: false
                                        },
                                        paymentResult: {
                                            id: {
                                                type: String
                                            },
                                            status: {
                                                type: String
                                            },
                                            update_time: {
                                                type: String
                                            },
                                            email: {
                                                type: String
                                            },
                                        },
                                        totalPrice: {
                                            type: Number,
                                            required: true,
                                            default: 0.0
                                        },

                                    }, {timestamps: true})
const Order = mongoose.model('Order', orderSchema);
export default Order;