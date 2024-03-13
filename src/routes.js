const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProductById,
  getProductById,
  readAllProducts,
} = require("./products");

const router = express.Router();

router.route("/products").get(readAllProducts);

router.route("/product").post(createProduct);

router
  .route("/product/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProductById);

module.exports = router;
