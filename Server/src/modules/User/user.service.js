const User = require("./user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
