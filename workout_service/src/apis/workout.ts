import express, { Request, Response } from 'express';
import { tokenAuth } from '../middleware/token-auth';
import WorkoutModel, { Workout } from "../models/workout";

export const workoutRouter = express.Router();

// @route UPDATE api/workouts
// @desc Upsert workout for current user
workoutRouter.patch('/', tokenAuth, (req: Request, res: Response) => {
    const { payload, pushups, situps, squats } = req.body;
    const { name } = payload;

    if (typeof name === 'undefined'
        || typeof pushups === 'undefined'
        || typeof situps === 'undefined'
        || typeof squats === 'undefined') {
        return res.status(400).json({ msg: 'Error saving workout' })
    }

    WorkoutModel.findOneAndUpdate({ name: name }, {
        $inc: {
            pushups,
            situps,
            squats
        }
    }, { new: true, upsert: true })
        .then(workout => res.json(workout))
        .catch(err => res.json({ err }));
});

// @route GET api/workouts/:name
// @desc get workouts for a user
workoutRouter.get('/:name', tokenAuth, (req: Request, res: Response) => {
    const { name } = req.params;

    if (typeof name === 'undefined') {
        return res.status(400).json({ msg: 'Error finding workout' });
    }

    WorkoutModel.findOne({ name })
        .then(workout => res.json(workout));
});

// @route GET api/workouts
// @desc get workouts for the current user
workoutRouter.get('/', tokenAuth, (req: Request, res: Response) => {
    const { name } = req.body.payload;

    if (typeof name === 'undefined') {
        return res.status(400).json({ msg: 'Error finding workout' });
    }

    WorkoutModel.findOne({ name })
        .then(workout => res.json(workout));
});

// @route POST api/workouts/list
// @desc get workouts for a list of users
workoutRouter.post('/list', tokenAuth, (req: Request, res: Response) => {
    const names: string[] = req.body.names;

    if (typeof names === 'undefined' || names.length <= 0) {
        return res.status(400).json({ msg: 'Error finding workout' });
    }

    WorkoutModel.find({
        'name': { $in: names }
    }).then(workout => res.json(workout))
    .catch(err => res.json({ err }));
});