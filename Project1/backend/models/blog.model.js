const mongoose = require("mongoose")
const ROLES = require("../constants/roles")

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
       
    },
    content:{
        type:String,
       
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("Blog", BlogSchema)
