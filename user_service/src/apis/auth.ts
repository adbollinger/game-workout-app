import express, { Request, Response } from 'express';
import { tokenAuth } from '../middleware/token-auth';
import UserModel, { User } from "../models/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const authRouter = express.Router();

// @route POST api/auth/login
// @desc login
authRouter.post('/login', (req, res) => {
    UserModel.findOne({ name: req.body.name })
        .then((user) => {
            if (!user) return res.status(400).json({ msg: 'invalid login credentials' });

            const JWTSecret = process.env.JWTSecret || '';

            if (JWTSecret == '') return res.status(400).json({ msg: 'Missing secret key' });

            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    jwt.sign(
                        {
                            id: user.id,
                            name: user.name
                        },
                        JWTSecret,
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
authRouter.get('/logout', (req, res) => {
    res.clearCookie('token').status(200).json({ message: 'successfully logged out'});
});

// @route GET api/auth/user
// @desc user
authRouter.get('/user', tokenAuth, (req, res) => {
    return res.status(200).json({ user: req.body.payload });
});
