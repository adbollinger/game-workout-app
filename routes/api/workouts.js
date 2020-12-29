const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route UPDATE api/workouts
// @desc Update workout
router.patch('/', auth, (req, res) => {
    const { name, pushups, situps, squats } = req.body;

    if (!name || !pushups || !situps || !squats) {
        res.status(400).json({ msg: 'Error saving workout' })
    }

    User.findOneAndUpdate({ name: name }, {
        $inc: {
            pushups,
            situps,
            squats
        }
    }, { new: true })
        .then(user => res.json(user))
        .catch(err => res.json({ err }));
});

module.exports = router;