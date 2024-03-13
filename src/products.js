const Product = require("./schema");

// Create Product
const createProduct = async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.price || !body.availableQuantity) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const newProduct = await Product.create({
    name: body.name,
    price: body.price,
    availableQuantity: body.availableQuantity,
  });
  return res
    .status(201)
    .json({ msg: "Successfully created!", id: newProduct._id });
};

// Create Product
const updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, { availableQuantity: 100 });
  return res.status(200).json({ status: "Succss" });
};

// Read all Products
const readAllProducts = async (req, res) => {
  const allProducts = await Product.find({});
  return res.status(200).json(allProducts);
};

// Read Product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  return res.status(200).json(product);
};

// Delete Product by ID
const deleteProductById = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "Success" });
};

module.exports = {
  createProduct,
  updateProduct,
  getProductById,
  readAllProducts,
  deleteProductById,
};
