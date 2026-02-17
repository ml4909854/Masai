


const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema({
      name:String,
      address:String,
      age:Number,
      education:String,
} , {
        versionKey:false,
        timestamps:true
})

module.exports = mongoose.model("profile" , ProfileSchema)