const mongoose = require("mongoose");
const { mongodbUrl } = require("../utils/secret");

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUrl, options);

    console.log("Database is connected!");

    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.error("could not connect to DB: ", error.toString());
  }
};

module.exports = connectDatabase;
