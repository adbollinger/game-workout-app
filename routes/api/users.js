const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route GET api/users
// @desc Get all users
router.get('/', (req, res) => {
    User.find()
        .sort({name: -1})
        .then(users => res.json(users));
}); 

// @route GET api/users/:name
// @desc Get a specific user
router.get('/:name', (req, res) => {
    User.findOne({name: req.params.name})
        .sort({name: -1})
        .then(user => res.json(user));
}); 

// @route POST api/users
// @desc Create a user
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        pushups: req.body.pushups,
        situps: req.body.situps,
        squats: req.body.squats,
    });

    newUser.save()
        .then(user => res.json(user));
});

// @route DELETE api/users/:name
// @desc Delete a user
router.delete('/:name', (req, res) => {
    User.deleteOne({name: req.params.name})
        .then(user => res.json(user));
});

module.exports = router;