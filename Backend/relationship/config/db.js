

const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017/db1"

const connectDB =  async()=>{
    try {
        mongoose.connect(mongoUrl)
        console.log("DB! Connected!")
    } catch (error) {
        console.log(error  ,"Error to connect DB!")
    }
}

module.exports = connectDB