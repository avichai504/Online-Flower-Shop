const express = require("express");
const orderController = require("./order.controller");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, orderController.createOrder);
router.get("/:orderId", authMiddleware, orderController.getOrder);
router.get("/user/:userId", authMiddleware, orderController.getUserOrders);

module.exports = router;
