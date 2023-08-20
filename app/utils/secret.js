require("dotenv").config();

const serverPort = process.env.PORT || 3600;
const mongodbUrl =
  process.env.MONGODB_ATLAS_URL ||
  "mongodb://localhost:27017/product_management";

const jwtSecretKey = process.env.JWT_SECRET_KEY || "fdsygklj34534";

module.exports = {
  serverPort,
  mongodbUrl,
  jwtSecretKey,
};
