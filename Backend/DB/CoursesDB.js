const mongoose = require('mongoose')
require('dotenv/config')

const DB_Connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DB connection Successful')
    } catch (e) {
        console.error('DB connection failed')
        process.exit(1)
    }
}

module.exports = DB_Connect