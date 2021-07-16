import { Schema, model } from 'mongoose';

export interface User {
    name: string;
    password: string;
    date: string;
}

const schema = new Schema<User>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

export default model<User>('User', schema);