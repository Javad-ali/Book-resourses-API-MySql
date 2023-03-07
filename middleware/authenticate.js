// const jwt = require('../config/jwt');
const jwt = require('jsonwebtoken');

const config = require('../config/database');

const authenticate = async (req, res, next) => {

    try { 
      const authHeader = req.header("Authorization");
    if(!authHeader) return res.status(404).json({message:"Non-Authorized user!"})

  if (authHeader.startsWith('Bearer ')) {
     token = authHeader.slice(7);
  }
      const payload = jwt.verify(token, process.env.JWT);
      if(!payload) return res.status(401).json({ message: 'Invalid token' });
        req.user = payload;
        next();
   
    } catch (err) {
      console.log(err.message)
      res.status(401).json({ message: 'Invalid token' });
    }

};

module.exports = authenticate;
