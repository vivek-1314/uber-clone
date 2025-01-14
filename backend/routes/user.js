const express = require('express');
const { body } = require('express-validator');
const { registeruser } = require('../controller/user');  

const router = express.Router();

router.post('/register', [
    // Validation rules
    body('email')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password should be at least 8 characters long'),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name should be at least 3 characters long'),
], registeruser);  

module.exports = router;
