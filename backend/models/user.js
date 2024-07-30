import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
}, { timestamps: true })

export const User = mongoose.model("User", userModel)