const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route GET api/users
// @desc Get all users
router.get('/', (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then(users => res.json(users));
});

// @route GET api/users/:name
// @desc Get a specific user
router.get('/:name', (req, res) => {
    const { name } = req.params;

    if (!name) {
        res.status(400).json({ msg: 'Error finding user' });
    }

    User.findOne({ name })
        .then(user => res.json(user));
});

// @route POST api/users
// @desc Create a user
router.post('/', (req, res) => {
    const { name, pushups, situps, squats } = req.body;
    
    if (!name || !pushups || !situps || !squats) {
        res.status(400).json({ msg: 'Error creating a user' })
    }

    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            name,
            password: hash,
            pushups,
            situps,
            squats,
        });

        newUser.save()
            .then(user => res.json(user));
    });
});

// @route DELETE api/users/:name
// @desc Delete a user
router.delete('/:name', auth, (req, res) => {
    const { name } = req.params;

    if (!name) {
        res.status(400).json({ msg: 'Error deleting user' });
    }

    User.deleteOne({ name })
        .then(user => res.json(user));
});

module.exports = router;