const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
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

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw createHttpError(404, "User does not exist. Please register first");
    }

    //compare pass
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw createHttpError(401, "Email/password did not match");
    }

    const userWithoutPassword = await User.findOne({ email }).select(
      "-password"
    );

    const accessToken = createJsonWebToken(
      { userWithoutPassword },
      jwtSecretKey,
      "30m"
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 30 * 60 * 1000,
      // httpOnly: true,
      // secure: true,
      sameSite: "none",
    });

    return successResponse(res, {
      statusCode: 200,
      message: "successfully login",
      payload: {
        user: userWithoutPassword,
        accessToken: accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

const userLogout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");

    return successResponse(res, {
      statusCode: 200,
      message: "successfully logged out",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { processRegister, userLogin, userLogout };
