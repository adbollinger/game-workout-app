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
    }, { new: true }, (err, doc) => {
        if (err)
            console.log("Error updating workout");

        return doc
    })
    .then(user => res.json(user));
});

module.exports = router;