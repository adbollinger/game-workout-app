const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route UPDATE api/workouts
// @desc Update workout
router.patch('/', (req, res) => {
    User.findOneAndUpdate({ name: req.body.name }, {
        $inc: {
            pushups: req.body.pushups, 
            situps: req.body.situps, 
            squats: req.body.squats
        }
    }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json({ err }));
});

module.exports = router;