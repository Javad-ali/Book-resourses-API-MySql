const bookModel = require('../models/bookModel');

// const bookController = {};

// Get all books
exports.getAllBook = async (req, res) => {
  try {
    const books = await bookModel.getAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one book
exports.getOneBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookModel.getOne(id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create book
exports.createBook = async (req, res) => {
  const { name, imageUrl, author, pages, price } = req.body;
  try {
    const newBook = await bookModel.create(name, imageUrl, author, pages, price);
    res.status(201).json({newBook,message:"book added successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl, author, pages, price } = req.body;
  try {
    const updatedBook = await bookModel.update(id, name, imageUrl, author, pages, price);
    res.json({updatedBook,message:"book updated successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await bookModel.delete(id);
    res.status(200).json({message:"book deleted successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

