import mongoose from 'mongoose';
import { Schema, model, Types } from 'mongoose';
import { Iuser } from '../interfaces/index';

const UserSchema: mongoose.Schema = new Schema<Iuser>({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    state: {
        type: Boolean,
        default: false,
        required: true,
    }
});

const User: mongoose.Model<Iuser> = model<Iuser>('User',UserSchema);

export {
    User
}
