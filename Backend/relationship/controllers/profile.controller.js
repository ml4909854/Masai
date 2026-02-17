

const express = require("express")
const ProfileModel = require("../models/profile.model")
const router = express.Router()

// craete Profile
router.post("/" , async(req , res)=>{
   try {
    const newProfile = new ProfileModel(req.body)
    const savedProfile = await newProfile.save()
    res.status(201).json({message:"Profile created" , Profile:newProfile})
   } catch (error) {
    res.status(500).json({message:"error to create Profile" ,error:error})
   }
}) 


// get Profile 
router.get("/"  , async(req , res)=>{
    try {
        const filter = req.query
        const Profiles = await ProfileModel.find(filter)
        res.status(200).json({message:"get all Profile" , count:Profiles.length , Profiles:Profiles })
    } catch (error) {
        res.status(500).json({message:"error to get all Profiles" , error:error})
    }
})


// get single Profile
router.get("/:id"  , async(req , res)=>{
    try {
        const id = req.params.id
        const Profiles = await ProfileModel.findById(id)
        if(!Profiles){
            res.status(404).json({message:"Profile not found!"})
        }
        res.status(200).json({message:"get a single Profile", Profiles:Profiles })
    } catch (error) {
        res.status(500).json({message:"error to get all Profiles" , error:error})
    }
})

// update a Profile

router.patch("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const updateProfile = await ProfileModel.findByIdAndUpdate(id , req.body , {
            new:true
         })
         res.status(200).json({message:"Profile updated" , Profile:updateProfile})
      } catch (error) {
        res.status(500).json({message:"error to update Profile" , error:error})
      }
})

// delete a Profile
router.delete("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const deleteProfile = await ProfileModel.findByIdAndDelete(id)
         res.status(200).json({message:"Profile deleted" , Profile:deleteProfile})
      } catch (error) {
        res.status(500).json({message:"error to delete Profile" , error:error})
      }
})


module.exports = router