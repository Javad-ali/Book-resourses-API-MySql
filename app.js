require("dotenv").config();
const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoute');
const authRoutes = require('./routes/authRoute');
const cors = require('cors');
const app = express()
const port = process.env.APP_PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/auth', authRoutes);


// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




