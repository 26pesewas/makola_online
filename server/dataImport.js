import express from "express";
import User from "./models/userModel.js";
import users from "./data/users.js";
import Product from "./models/productModel.js"
import products from "./data/Products.js";
import asyncHandler from "express-async-handler"


const importData = express.Router();

//HTTP post request and response user data and post to mongodb
importData.post(
    "/user", 
asyncHandler(async (req,res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
})
);

//HTTP post request and response product data and post to mongodb
importData.post(
    "/products", 
asyncHandler(async (req,res) => {
    await Product.deleteMany({});
    const importProduct = await Product.insertMany(products);
    res.send({ importProduct});
})
);

export default importData;