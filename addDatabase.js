import mongoose from "mongoose";
import users from "./data/users.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";


mongoose.connect('mongodb://localhost:27017/coffee');
const response = await fetch('https://api.sampleapis.com/coffee/hot');
const products = await response.json();
 
const importData = async () => {
    console.log('test')
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
        });
    //
        await Product.insertMany(sampleProducts);
    
        console.log("Data Imported!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
    
        console.log("Data Destroyed!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}