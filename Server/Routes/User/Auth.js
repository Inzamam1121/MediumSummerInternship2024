const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, login, verifyEmail } = require('../../Controllers/Auth');

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post(
    '/signup',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    signup
);

// @route   POST api/auth/verify-email
// @desc    Verify email with OTP
// @access  Public
router.post(
    '/verify-email',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('otp', 'OTP is required').not().isEmpty(),
    ],
    verifyEmail
);

// @route   POST api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    login
);

module.exports = router;
