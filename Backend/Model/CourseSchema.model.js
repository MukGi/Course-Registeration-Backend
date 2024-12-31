
// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
    courseName:{
        type: String,
        required: [true, 'Provide the course name']
    },

    courseCode:{
        type: String,
        required: [true, 'Provide the course code'],
        minLength: [8, 'The Character length should be 8'],
        maxLength: [8, 'The Character length should be 8']
    },

    description:{
        type: String,
        required:[true,'Give a short description of the course']
    }
},
 {
    timestamps: true
 }
);

const Course = new mongoose.model("Course", CourseSchema);
module.exports = Course