import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import Address from "ipaddr.js";
import { resume } from "npmlog";
import { validate } from "node-cron";
import { First } from "react-bootstrap/esm/PageItem";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: [3, "Please enter a valid name"],
        maxlength:[ 40, "Name cannot exceed 40 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    phone:{
        type: Number,
        required: true,
    },
    Address:{
        type: String,
        required: true,
    },
    niche:{
        firstNiche: String,
        secondNiche: String,
        thirdNiche: String,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength:[ 32 , "Password cannot exceed 32 characters"]
    },
    role: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"],
    },
    resume:{
        public_id: String,
        url: String,

    },
    coverLetter:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    
}
)

export const User = mongoose.model("User", userSchema)