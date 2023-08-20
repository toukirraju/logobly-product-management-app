const User = require("../models/userModel");
const { createJsonWebToken } = require("../utils/jsonwebtoken");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { jwtSecretKey } = require("../utils/secret");

const processRegister = async (req, res, next) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const userExists = await User.exists({ email: email });

    if (userExists) {
      return errorResponse(res, {
        statusCode: 409,
        message: "This email already exist. Please sign in",
      });
    }

    const user = User.create({ name, email, password, isAdmin });

    if (user) {
      const token = createJsonWebToken(
        { name, email, password, isAdmin },
        jwtSecretKey,
        "30m"
      );

      return successResponse(res, {
        statusCode: 200,
        message: "user was registred successfully",
        payload: token,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { processRegister };
