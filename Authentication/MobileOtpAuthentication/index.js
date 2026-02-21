
const express  = require("express")
const connectDB = require("./config/db")
const userController = require("./controllers/user.controller.js")
const app = express()
app.use(express.json())

app.use("/users" , userController)
app.get("/" , (req , res)=>{
    res.send("connected>")
})

//
app.get((req , res)=>{
    res.send("page not found!")
})
app.listen(3000 , async(req , res)=>{
    await connectDB()
    console.log(
        "server running"
    )
})