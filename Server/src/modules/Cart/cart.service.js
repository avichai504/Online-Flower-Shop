const Cart = require('./cart.model');

const getCart = async (userId) => {
  const cart = await Cart.findOne({ userId }).populate('items.productId');
  if (!cart) {
    const newCart = new Cart({ userId, items: [] });
    await newCart.save();
    return newCart;
  }
  return cart;
};

const addToCart = async (userId, productId, quantity) => {
  const cart = await getCart(userId);
  const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }
  await cart.save();
  return cart;
};

const removeFromCart = async (userId, productId) => {
  const cart = await getCart(userId);
  cart.items = cart.items.filter(item => item.productId.toString() !== productId);
  await cart.save();
  return cart;
};

const clearCart = async (userId) => {
  const cart = await getCart(userId);
  cart.items = [];
  await cart.save();
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
