
const express = require("express")
const connectDB = require("./config/db")
const userController = require("./controllers/user.controller")
const profileController = require("./controllers/profile.controller")
const productController = require("./controllers/product.controller")

const app  = express()
app.use(express.json())

app.use("/users" , userController)
app.use("/profiles" , profileController)
app.use("/products" , productController)

app.get("/health" , (req , res)=>{
    res.send("connected!")
})

app.use((req ,res)=>{
    res.send("page not found !")
})


app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running")
})