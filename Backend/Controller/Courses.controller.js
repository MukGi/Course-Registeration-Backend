const Courses = require('../Model/CourseSchema.model')


/**Get all Courses */
const getAllCourses = async (req,res)=>{
    try{
        const allCourses = await Courses.find({})
        if(allCourses==""){
            res.status(400).json({message:`No Courses Found`})
        }
        res.status(200).json({success: true, message: allCourses})
    }
    catch(e){
        res.status(500).json({success:false, message:`${e}`})
    }
}

/**Get Course By ID */
const getCourseByID = async (req,res)=>{
    try{
        const {id} = req.params
        const getCourse = await Courses.findById(id)
        if(!getCourse){
            res.status(404).json({success:false, message: 'Course not Found'})
        } 
        res.status(200).json({success: true, message: getCourse})
    }
    catch(e){
        res.status(500).json({success:false, message:`${e}`})
    }
}

/**Create Course */
const createCourse = async (req,res) => {
    try {
        const course = {
            courseName: req.body.courseName,
            courseCode: req.body.courseCode,
            description: req.body.description
        }
        const newCourse = await Courses.create(course)
        res.status(200).json({success: true, data: newCourse})
    } catch (e) {
        res.status(500).json({success:false, message:`${e}`})
    }
}

/**Update Course by id */
const updateCourse = async (req,res) => {
    try {
        const course = {
            courseName: req.body.courseName,
            courseCode: req.body.courseCode,
            description: req.body.description
        }
        const {id}= req.params
        const updatedCourse = await Courses.findByIdAndUpdate(id,course)
        res.status(200).json({success: true, data: updatedCourse})
    } catch (e) {
        res.status(500).json({success:false, message:`${e}`})
    }
}

/**Delete Course By ID */
const deleteCourseByID = async (req,res) => {
    try {
        const course = {
            courseName: req.body.courseName,
            courseCode: req.body.courseCode,
            description: req.body.description
        }
        const {id}= req.params
        const foundCourse = await Courses.findByIdAndDelete(id)
        res.status(200).json({success: true, data: foundCourse})
    } catch (e) {
        res.status(500).json({success:false, message:`${e}`})
    }
}

/**Delet All courses */
const deleteAllCourse = async (req,res) => {
    try {
        const delCourses = await Courses.deleteMany({})
        res.status(200).json({success: true, data: delCourses})
    } catch (e) {
        res.status(500).json({success:false, message:`${e}`})
    }
}

module.exports = {
    getAllCourses,
    getCourseByID,
    createCourse,
    updateCourse,
    deleteCourseByID,
    deleteAllCourse
}
  