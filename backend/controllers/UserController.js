const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET;

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '7d',
  });
};

// User Registration
const register = async (req, res) => {
    res.send('User registration endpoint');
};
module.exports = {
  register,
};