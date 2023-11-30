const express = require('express');
const router = express.Router();
const registerController = require('../Controller/authController');

// routing method
// Register || method post
router.post('/registers', registerController);

export default router;