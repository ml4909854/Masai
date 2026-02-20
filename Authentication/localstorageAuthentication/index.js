

const express = require("express")
const connectDB = require("./config/db")
const userController = require("./contollers/user.controller")
const app = express()

app.use(express.json())

app.use("/users" , userController)

console.log("mahesh")
app.get("/" , (req  , res)=>{
    console.log("connected!")
})
app.listen(3000 ,async ()=>{
    await connectDB()
    console.log("server is running")
})