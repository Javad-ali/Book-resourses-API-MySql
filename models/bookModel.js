const pool = require('../config/database');

const bookModel = {};

// Get all books
bookModel.getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM books';
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Get one book
bookModel.getOne = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM books WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.length === 0) {
        reject({ message: 'Book not found' });
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Create book
bookModel.create = (name, imageUrl, author, pages, price) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO books SET ?';
    const values = { name, imageUrl, author, pages, price };
    pool.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        const newBook = { id: results.insertId, ...values };
        resolve(newBook);
      }
    });
  });
};

// Update book
bookModel.update = (id, name, imageUrl, author, pages, price) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE books SET ? WHERE id = ?';
    const values = { name, imageUrl, author, pages, price };
    pool.query(sql, [values, id], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.affectedRows === 0) {
        reject({ message: 'Book not found' });
      } else {
        const updatedBook = { id, ...values };
        resolve(updatedBook);
      }
    });
  });
};

// Delete book
bookModel.delete = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM books WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.affectedRows === 0) {
        reject({ message: 'Book not found' });
      } else {
        resolve();
      }
    });
  });
};

module.exports = bookModel;
