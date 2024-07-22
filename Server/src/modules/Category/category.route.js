const express = require("express");
const categoryController = require("./category.controller");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, categoryController.createCategory);
router.get("/:categoryId", categoryController.getCategory);
router.put("/:categoryId", authMiddleware, categoryController.updateCategory);
router.delete(
  "/:categoryId",
  authMiddleware,
  categoryController.deleteCategory
);
router.get("/", categoryController.getAllCategories);

module.exports = router;
