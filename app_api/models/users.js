const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
});

// Hash the user's password before saving
userSchema.methods.setPassword = async function(password) {
    this.hash = await bcrypt.hash(password, 12);
};

// Verify the user's password
userSchema.methods.validPassword = async function(password) {
    return bcrypt.compare(password, this.hash);
};

mongoose.model('User', userSchema);