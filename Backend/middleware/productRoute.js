
const express = require("express")
const router = express.Router()

router.get("/" , (req , res)=>{
    console.log("before landing page")
    next()
    console.log("after landing page")
    // console.log("langing page"
    res.send("get all product")
})

router.get("/:id" , (req , ers)=>{
    res.send("get each and every product")
})

router.post("/item" , (req , res)=>{
    res.send("Post products")
} )

module.exports = router