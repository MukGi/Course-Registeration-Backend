const express = require('express')
require('dotenv/config')
const app = express()
const PORT = process.env.PORT
const routes = require('../Backend/Router/CourseRegisteration.routes')
const DB = require('../Backend/DB/CoursesDB')

//middleware
app.use(express.json())
app.use('/api',routes)

//Route
app.get('/',(req,res)=>{
    res.send('Working')
})
/**Connect to DB */
DB()
//Server Listen
app.listen(PORT,()=>{
    console.log(`Server running on: http://localhost:${PORT}`)
})