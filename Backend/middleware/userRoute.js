
const express = require("express")
const router = express.Router()


router.get("/" , (req , res)=>{
    res.send("User home page")
})

router.get("/profile" , (req , res)=>{
    res.send("user profile page")

})

module.exports = router