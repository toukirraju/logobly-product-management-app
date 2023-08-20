const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../utils/secret");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      throw createHttpError(401, "Access token not found. Please login");
    }
    const decoded = jwt.verify(token, jwtSecretKey);
    if (!decoded) {
      throw createHttpError(401, "Invalid access token. Please login again");
    }
    req.user = decoded.user;
    next();
  } catch (error) {
    next(error);
  }
};

const isLoggedOut = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (token) {
      throw createHttpError(400, "User is already logged in");
    }
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
      throw createHttpError(403, "Forbidden. You must be an admin");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isLoggedIn, isLoggedOut, isAdmin };
