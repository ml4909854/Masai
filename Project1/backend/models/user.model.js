const mongoose = require("mongoose")
const ROLES = require("../constants/roles")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:[ROLES.ADMIN , ROLES.AUTHOR , ROLES.READER],
        default:ROLES.READER
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("User", UserSchema)
