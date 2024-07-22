const Category = require("./category.model");

const createCategory = async (name) => {
  const category = new Category({ name });
  await category.save();
  return category;
};

const getCategory = async (categoryId) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

const updateCategory = async (categoryId, name) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new Error("Category not found");
  }
  category.name = name || category.name;
  await category.save();
  return category;
};

const deleteCategory = async (categoryId) => {
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new Error("Category not found");
  }
  await category.remove();
};

const getAllCategories = async () => {
  const categories = await Category.find();
  return categories;
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
