const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route POST api/auth/login
// @desc login
router.post('/login', (req, res) => {
    User.findOne({ name: req.body.name })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    jwt.sign(
                        {
                            id: user.id,
                            name: user.name
                        },
                        config.get('jwtSecret'),
                        { expiresIn: 360000 },
                        (err, token) => {
                            if (err) throw err;
                            return res.status(200).cookie('token', token, { httpOnly: true, maxAge: 36000000 }).json({ user });
                        }
                    )
                } else {
                    return res.status(400).json({ msg: 'invalid login credentials' });
                }
            });
        });

});

// @route GET api/auth/logout
// @desc logout
router.get('/logout', (req, res) => {
    res.clearCookie('token').sendStatus(200);
});

// @route GET api/auth/logout
// @desc logout
router.get('/user', auth, (req, res) => {
    console.log(req.user)
    return res.status(200).json({ user: req.user });
});

module.exports = router;