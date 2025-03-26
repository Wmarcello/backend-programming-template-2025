const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// GET /api/books
router.get('/', bookController.getBooks);

module.exports = router; 