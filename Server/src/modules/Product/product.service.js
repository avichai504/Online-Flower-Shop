const Product = require("./product.model");

const createProduct = async (name, description, price, stock) => {
  const product = new Product({ name, description, price, stock });
  await product.save();
  return product;
};

const getProduct = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const updateProduct = async (productId, name, description, price, stock) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  product.name = name || product.name;
  product.description = description || product.description;
  product.price = price || product.price;
  product.stock = stock || product.stock;
  await product.save();
  return product;
};

const deleteProduct = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  await product.remove();
};

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
