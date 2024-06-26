import express from 'express';
import Product from '../models/productModel.js'; // Assuming you have a productModel
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.deleteOne({});
    const createdProducts = await Product.insertMany(data.products);
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users); 
    res.send({ createdProducts, createdUsers });
});

export default seedRouter;