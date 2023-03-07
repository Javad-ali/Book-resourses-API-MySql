const express = require('express');
const bookController = require('../controller/bookController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Get all books
router.get('/', authenticate, bookController.getAllBook);

// Get one book
router.get('/:id', authenticate, bookController.getOneBook);

// Create book
router.post('/', authenticate, bookController.createBook);

// Update book
router.put('/:id', authenticate, bookController.updateBook);

// Delete book
router.delete('/:id', authenticate, bookController.deleteBook);

module.exports = router;
