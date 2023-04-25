import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
                                         name: {type: String, required: true},
                                         comment: {type: String, required: true},
                                     })

const productSchema = mongoose.Schema({
                                          user: {
                                              type: mongoose.Schema.Types.ObjectId,
                                              required: true,
                                              ref: 'User'
                                          },
                                        //   name: {
                                        //       type: String,
                                        //       required: true,
                                        //   },
                                          image: {
                                              type: String,
                                              required: true,
                                          },
                                          title: {
                                              type: String,
                                              required: true
                                          },
                                          price: {
                                              type: Number,
                                              required: true,
                                              default: 3.99
                                          },
                                          description: {
                                                type: String,
                                                required: false,
                                          },
                                          ingredients: {
                                                type: Array,
                                                required: false,
                                            },
                                          reviews: [reviewSchema],

                                      }, {timestamps: true})
const Product = mongoose.model('Product', productSchema);

export default Product;