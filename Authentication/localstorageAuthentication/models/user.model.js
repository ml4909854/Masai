
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    email:String,
    password:String
} , {
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("User",UserSchema)