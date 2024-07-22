const express = require('express');
const cartController = require('./cart.controller');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/:userId', authMiddleware, cartController.getCart);
router.post('/add', authMiddleware, cartController.addToCart);
router.post('/remove', authMiddleware, cartController.removeFromCart);
router.post('/clear', authMiddleware, cartController.clearCart);

module.exports = router;
