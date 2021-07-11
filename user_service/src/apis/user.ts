import express, { Request, Response } from 'express';
import { tokenAuth } from '../middleware/token-auth';
import UserModel, { User } from "../models/user";
import bcrypt from 'bcrypt';


export const userRouter = express.Router();

// @route GET api/users
// @desc Get all users
userRouter.get('/', tokenAuth, (req: Request, res: Response) => {
    UserModel.find()
        .sort({ name: -1 })
        .then(users => res.json(users));
});

// @route GET api/users/:name
// @desc Get a specific user
userRouter.get('/:name', tokenAuth, (req: Request, res: Response) => {
    const { name } = req.params;

    if (typeof name === 'undefined') {
        return res.status(400).json({ msg: 'Error finding user' });
    }

    UserModel.findOne({ name })
        .then(user => res.json(user));
});

// @route POST api/users
// @desc Create a user
userRouter.post('/', (req: Request, res: Response) => {
    const { name, password } = req.body;

    if (typeof name === 'undefined' 
    || typeof password === 'undefined') {
        return res.status(400).json({ msg: 'Error creating a user' })
    }

    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new UserModel({
            name,
            password: hash
        });

        newUser.save()
            .then(user => res.json(user));
    });
});

// @route DELETE api/users/:name
// @desc Delete a user
userRouter.delete('/:name', tokenAuth, (req: Request, res: Response) => {
    const { name } = req.params;

    if (typeof name === 'undefined') {
        return res.status(400).json({ msg: 'Error deleting user' });
    }

    UserModel.deleteOne({ name })
        .then(user => res.json(user));
});
