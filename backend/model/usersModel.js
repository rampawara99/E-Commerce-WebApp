import mongoose from "mongoose";

const Schema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name should be at least 2 characters long'],
        maxlength: [50, 'First name should not exceed 50 characters'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name should be at least 2 characters long'],
        maxlength: [50, 'Last name should not exceed 50 characters'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email should be unique']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password should be at least 6 characters long']
    },
    user: {
        type: String,
        required: [true, 'User is required'],
        enum: ['seller', 'user'] // accepts only 'admin' or 'user'
    }
});


const UsersModel = mongoose.model('users', Schema);
export default UsersModel;