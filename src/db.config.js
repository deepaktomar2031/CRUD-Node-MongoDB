const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async (URL) => {
  return mongoose.connect(URL);
};

module.exports = {
  connectDB,
};
