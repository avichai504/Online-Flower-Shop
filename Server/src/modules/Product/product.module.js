const express = require("express");
const productController = require("./product.controller");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, productController.createProduct);
router.get("/:productId", productController.getProduct);
router.put("/:productId", authMiddleware, productController.updateProduct);
router.delete("/:productId", authMiddleware, productController.deleteProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
