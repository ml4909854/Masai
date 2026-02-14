
// create a server by using express 

const express = require("express")
const server = express()

server.get("/" , (req , res)=>{
    res.send("Hello world")
})

server.post("/post" , (req , res)=>{
     res.send("post data!")
})

server.delete("/delete" , (req , res)=>{
    res.send("delete data!")
})

server.listen(3000 , ()=>{
    console.log("server is running")
})