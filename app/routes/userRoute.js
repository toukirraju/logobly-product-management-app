const express = require("express");
const { processRegister } = require("../controllers/userController");
const { validateUserRegistration } = require("../validators/auth");
const runValidation = require("../validators");

const userRoute = express.Router();

userRoute.post(
  "/register",
  validateUserRegistration,
  runValidation,
  processRegister
);

module.exports = userRoute;
