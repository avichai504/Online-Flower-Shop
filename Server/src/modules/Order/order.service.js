const Order = require("./order.model");

const createOrder = async (userId, items, total) => {
  const order = new Order({ userId, items, total });
  await order.save();
  return order;
};

const getOrder = async (orderId) => {
  const order = await Order.findById(orderId).populate("items.productId");
  return order;
};

const getUserOrders = async (userId) => {
  const orders = await Order.find({ userId }).populate("items.productId");
  return orders;
};

module.exports = {
  createOrder,
  getOrder,
  getUserOrders,
};
