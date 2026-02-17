

const express = require("express")
const ProductModel = require("../models/product.model")
const router = express.Router()

// craete Product
router.post("/" , async(req , res)=>{
   try {
    const newProduct = new ProductModel(req.body)
    const savedProduct = await newProduct.save()
    res.status(201).json({message:"Product created" , Product:newProduct})
   } catch (error) {
    res.status(500).json({message:"error to create Product" ,error:error})
   }
}) 


// get Product 
router.get("/"  , async(req , res)=>{
    try {
        const filter = req.query
        const Products = await ProductModel.find(filter)
        res.status(200).json({message:"get all Product" , count:Products.length , Products:Products })
    } catch (error) {
        res.status(500).json({message:"error to get all Products" , error:error})
    }
})


// get single Product
router.get("/:id"  , async(req , res)=>{
    try {
        const id = req.params.id
        const Products = await ProductModel.findById(id)
        if(!Products){
            res.status(404).json({message:"Product not found!"})
        }
        res.status(200).json({message:"get a single Product", Products:Products })
    } catch (error) {
        res.status(500).json({message:"error to get all Products" , error:error})
    }
})

// update a Product

router.patch("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const updateProduct = await ProductModel.findByIdAndUpdate(id , req.body , {
            new:true
         })
         res.status(200).json({message:"Product updated" , Product:updateProduct})
      } catch (error) {
        res.status(500).json({message:"error to update Product" , error:error})
      }
})

// delete a Product
router.delete("/:id" ,async (req , res)=>{
      try {
         const id = req.params.id
         const deleteProduct = await ProductModel.findByIdAndDelete(id)
         res.status(200).json({message:"Product deleted" , Product:deleteProduct})
      } catch (error) {
        res.status(500).json({message:"error to delete Product" , error:error})
      }
})


module.exports = router