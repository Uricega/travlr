const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

// Administrator login
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Email and password are required'
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.validPassword(password))) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            {
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });

    } catch (error) {
        return res.status(500).json({
            message: 'Authentication failed'
        });
    }
};

module.exports = {
    login
};