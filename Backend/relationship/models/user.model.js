
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
     username:String,
     profileId:{type:mongoose.Schema.Types.ObjectId , ref:"profile"},
     orderId:[{type:mongoose.Schema.Types.ObjectId , ref:"product"}]
} , {
        versionKey:false,
        timestamps:true
})

module.exports = mongoose.model("user" , UserSchema)