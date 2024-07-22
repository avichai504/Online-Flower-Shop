const cartService = require('./cart.service');

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await cartService.getCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error });
  }
};

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await cartService.addToCart(userId, productId, quantity);
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await cartService.removeFromCart(userId, productId);
    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart', error });
  }
};

const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;
    await cartService.clearCart(userId);
    res.status(200).json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
