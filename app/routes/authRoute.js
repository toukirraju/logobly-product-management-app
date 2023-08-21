const express = require("express");
const {
  processRegister,
  userLogin,
  userLogout,
} = require("../controllers/authController");
const {
  validateUserRegistration,
  validateUserLogin,
} = require("../validators/auth");
const runValidation = require("../validators");
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middlewares/auth");

const authRoute = express.Router();

authRoute.post(
  "/register",
  validateUserRegistration,
  runValidation,
  isLoggedOut,
  processRegister
);

authRoute.post(
  "/login",
  validateUserLogin,
  runValidation,
  isLoggedOut,
  userLogin
);

authRoute.post("/logout", userLogout);

module.exports = authRoute;
