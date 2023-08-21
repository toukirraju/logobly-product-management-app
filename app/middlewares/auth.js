const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../utils/secret");
const parseValue = require("../utils/parseValue");

const isLoggedIn = async (req, res, next) => {
  try {
    // const token = req.cookies.accessToken;
    const authHeader = req.headers.authorization;

    const parsedValue = parseValue(authHeader);
    const decoded = jwt.verify(parsedValue, jwtSecretKey);

    if (!authHeader) {
      throw createHttpError(401, "Access authHeader not found. Please login");
    }

    if (!decoded) {
      throw createHttpError(401, "Invalid access token. Please login again");
    }
    req.user = decoded.userWithoutPassword;
    next();
  } catch (error) {
    next(error);
  }
};

const isLoggedOut = async (req, res, next) => {
  try {
    // const token = req.cookies.accessToken;
    const authHeader = req.headers.authorization;
    if (authHeader) {
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
