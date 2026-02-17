

const express = require("express")
const UserModel = require("../models/user.model")
const router = express.Router()

// craete user
router.post("/" , async(req , res)=>{
   try {
    const newUser = new UserModel(req.body)
    const savedUser = await newUser.save()
    res.status(201).json({message:"user created" , user:newUser})
   } catch (error) {
    res.status(500).json({message:"error to create user" ,error:error})
   }
}) 


// get user 
router.get("/"  , async(req , res)=>{
    try {
        const filter = req.query
        const users = await UserModel.find(filter)
        res.status(200).json({message:"get all user" , count:users.length , users:users })
    } catch (error) {
        res.status(500).json({message:"error to get all users" , error:error})
    }
})


// get single user
router.get("/:id"  , async(req , res)=>{
    try {
        const id = req.params.id
        const users = await UserModel.findById(id).populate("profileId").populate("orderId")
        if(!users){
            res.status(404).json({message:"user not found!"})
        }
        res.status(200).json({message:"get a single user", users:users })
    } catch (error) {
        res.status(500).json({message:"error to get all users" , error:error})
    }
})

// update a user

router.patch("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const updateUser = await UserModel.findByIdAndUpdate(id , req.body , {
            new:true
         })
         res.status(200).json({message:"user updated" , user:updateUser})
      } catch (error) {
        res.status(500).json({message:"error to update user" , error:error})
      }
})

// delete a user
router.delete("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const deleteUser = await UserModel.findByIdAndDelete(id)
         res.status(200).json({message:"user deleted" , user:deleteUser})
      } catch (error) {
        res.status(500).json({message:"error to delete user" , error:error})
      }
})
module.exports = router