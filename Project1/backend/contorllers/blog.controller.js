require("dotenv").config()
const express = require("express")
const Blog = require("../models/blog.model")
const auth = require("../middlewares/auth")
const checkAccess = require("../middlewares/checkAccess")
const ROLES = require("../constants/roles")

const router = express.Router()


// GET ALL BLOGS
router.get("/", async (req, res) => {
   try {
      const blogs = await Blog.find().populate("author" , "name")
      res.status(200).json({
         message: "Blogs fetched",
         count: blogs.length,
         blogs
      })
   } catch (error) {
      res.status(500).json({ message: "Error fetching blogs" })
   }
})


// GET SINGLE BLOG
router.get("/:id", async (req, res) => {
   try {
      const blog = await Blog.findById(req.params.id)

      if (!blog) {
         return res.status(404).json({ message: "Blog not found!" })
      }

      res.status(200).json({ blog })

   } catch (error) {
      res.status(500).json({ message: "Error fetching blog" })
   }
})


// CREATE BLOG
router.post("/create", auth, checkAccess(ROLES.AUTHOR), async (req, res) => {
   try {
      const { title, content } = req.body

      const newBlog = new Blog({
         title,
         content,
         author: req.user._id
      })

      const savedBlog = await newBlog.save()

      res.status(201).json({
         message: "Blog created successfully!",
         blog: savedBlog
      })

   } catch (error) {
      res.status(500).json({ message: "Error creating blog" })
   }
})


// UPDATE BLOG
router.patch("/update/:id", auth, checkAccess(ROLES.AUTHOR), async (req, res) => {
   try {
      const blogId = req.params.id
      const blog = await Blog.findById(blogId)

      if (!blog) {
         return res.status(404).json({
            message: "Blog not found!"
         })
      }

      // OWNER CHECK
      if (blog.author.toString() !== req.user._id.toString()) {
         return res.status(403).json({
            message: "You cannot update someone else's blog"
         })
      }

      const updatedBlog = await Blog.findByIdAndUpdate(
         blogId,
         req.body,
         { new: true }
      )

      res.status(200).json({
         message: "Blog updated successfully!",
         blog: updatedBlog
      })

   } catch (error) {
      res.status(500).json({
         message: "Error updating blog",
         error: error.message
      })
   }
})


// DELETE BLOG
router.delete("/:id", auth, checkAccess(ROLES.AUTHOR), async (req, res) => {
   try {
      const blogId = req.params.id
      const blog = await Blog.findById(blogId)

      if (!blog) {
         return res.status(404).json({
            message: "Blog not found!"
         })
      }

      // OWNER CHECK
      if (blog.author.toString() !== req.user._id.toString()) {
         return res.status(403).json({
            message: "You cannot delete someone else's blog"
         })
      }

      const deletedBlog = await Blog.findByIdAndDelete(blogId)

      res.status(200).json({
         message: "Blog deleted successfully!",
         blog: deletedBlog
      })

   } catch (error) {
      res.status(500).json({
         message: "Error deleting blog",
         error: error.message
      })
   }
})

module.exports = router
