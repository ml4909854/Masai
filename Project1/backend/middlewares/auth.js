require("dotenv").config()
const jwt = require("jsonwebtoken")
const blackList = require("../blackList")
const User = require("../models/user.model")

const auth = async (req, res, next) => {
   try {
      const authHeader = req.headers.authorization

      if (!authHeader) {
         return res.status(401).json({ message: "Token missing" })
      }

      const token = authHeader.split(" ")[1]

      if (blackList.has(token)) {
         return res.status(401).json({
            message: "User logged out. Please login again"
         })
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      const user = await User.findById(decoded._id)
      if (!user) {
         return res.status(404).json({ message: "User not found" })
      }

      req.user = user
      next()

   } catch (error) {
      res.status(401).json({
         message: "Invalid or expired token",
         error: error.message
      })
   }
}

module.exports = auth
