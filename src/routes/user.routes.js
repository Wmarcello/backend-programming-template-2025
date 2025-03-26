const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /api/users
router.get('/', userController.getUsers);

module.exports = router; 