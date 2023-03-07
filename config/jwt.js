const jwt = require('jsonwebtoken');
const config = require('../config/database');

const generateToken = (payload) => {
  const secret =process.env.JWT;
  const options = { expiresIn: '1d' };
  return jwt.sign(payload, secret, options);
};

const verifyToken = (token) => {
  const secret = process.env.JWT;
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
