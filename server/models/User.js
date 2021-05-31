const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    pushups: {
        type: Number,
        default: 0
    },
    situps: {
        type: Number,
        default: 0
    },
    squats: {
        type: Number,
        default: 0
    }
});

module.exports = User = mongoose.model('user', UserSchema);