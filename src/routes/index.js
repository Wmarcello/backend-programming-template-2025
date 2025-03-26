const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const bookRoutes = require('./book.routes');

// Authentication routes
router.use('/authentication', authRoutes);

// User routes
router.use('/users', userRoutes);

// Book routes
router.use('/books', bookRoutes);

module.exports = router;
