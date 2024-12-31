
const express = require('express')
const Courses = require('../Model/CourseSchema.model')
const route = express.Router()
const courseController = require('../Controller/Courses.controller')

// Routes
route.get('/', courseController.getAllCourses)
route.get('/id/:id',courseController.getCourseByID)
route.post('/',courseController.createCourse)
route.put('/id/:id',courseController.updateCourse)
route.delete('/id/:id',courseController.deleteCourseByID)
route.delete('/',courseController.deleteAllCourse)

module.exports = route