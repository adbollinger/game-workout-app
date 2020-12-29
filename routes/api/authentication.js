const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

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
                        { expiresIn: 36000 },
                        (err, token) => {
                            if (err) throw err;
                            return res.status(200).json({
                                user: user,
                                token: token
                            })
                        }
                    )
                    
                } else {
                    return res.status(401).json({ msg: 'invalid login credentials' });
                }
            });
        });

});

module.exports = router;