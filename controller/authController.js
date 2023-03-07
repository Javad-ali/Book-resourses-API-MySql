const jwt = require('../config/jwt');
const config = require('../config/database');

const authController = {};

// Login
authController.login = async (req, res) => {
  const { username, password } = req.body;
  if (username === config.username && password === config.password) {
    const token = await jwt.sign({ username });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = authController;
