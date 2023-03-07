const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
// const db = require('../config/database');
const connection = require('../config/database')
// const { validateInput } = require('./utils');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password were provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if user exists
    // let query = 
     connection.query('SELECT * FROM user WHERE username = ?', [username], (err,rows)=>{
        if(err)  return res.status(401).json({ message: 'Invalid username or password' });

        validateAndSendJwt(rows[0])
        
        
    })
    
     function validateAndSendJwt(user){
        console.log(user);
         const isMatch = user.password === password
         if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
          }
         // Generate JWT and send it in response

         const payload = { username: user.username };
         const token = jwt.sign(payload, process.env.JWT, { expiresIn: '1d' });
         return res.json({ token });

     }
    // Check if password is correct

    

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
