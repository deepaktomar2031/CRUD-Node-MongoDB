const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    availableQuantity: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
