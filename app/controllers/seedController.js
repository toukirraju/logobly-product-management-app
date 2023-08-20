const data = require("../../data");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const { successResponse } = require("../utils/responseHandler");

const seedUser = async (req, res, next) => {
  try {
    await User.deleteMany({});

    const users = await User.insertMany(data.users);

    return successResponse(res, {
      statusCode: 200,
      message: "seed user create successfully",
      payload: users,
    });
  } catch (error) {
    next(error);
  }
};

const seedProducts = async (req, res, next) => {
  try {
    await Product.deleteMany({});

    const products = await Product.insertMany(data.products);

    return successResponse(res, {
      statusCode: 200,
      message: "seed products create successfully",
      payload: products,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUser, seedProducts };
