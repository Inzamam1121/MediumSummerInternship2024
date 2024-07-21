const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const sendEmail = require('../utils/sendEmail');
const generateOTP = require('../utils/generateOTP');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const otp = generateOTP();
        console.log(`Generated OTP: ${otp}`);

        user = new User({
            name,
            email,
            password,
            otp 
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await user.save();
    
        await sendEmail(email, otp);

        res.json({ msg: 'User registered. Check your email for OTP.' });
    } catch (err) {
        console.error('Signup error:', err.message);
        res.status(500).send('Server error');
    }
};
exports.verifyEmail = async (req, res) => {
    const { email, otp } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ msg: 'Invalid OTP' });
        }

        user.otp = null;
        user.isVerified = true;
        await user.save();

        res.json({ msg: 'Email verified successfully' });
    } catch (err) {
        console.error('Verification error:', err.message);
        res.status(500).send('Server error');
    }
};


exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            console.log('User not found'); 
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Password does not match'); // Debugging: Log if passwords do not match
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).send('Server error');
    }
};
