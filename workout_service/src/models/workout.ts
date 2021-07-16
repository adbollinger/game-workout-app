import { Schema, model } from 'mongoose';

export interface Workout {
    name: string;
    pushups: number;
    situps: number;
    squats: number;
}

const schema = new Schema<Workout>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pushups: {
        type: Number,
        default: 0
    },
    situps: {
        type: Number,
        default: 0
    },
    squats: {
        type: Number,
        default: 0
    }
});

export default model<Workout>('Workout', schema);