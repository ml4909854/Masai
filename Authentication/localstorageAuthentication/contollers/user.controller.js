const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

// register
router.post("/register", async (req, res) => {
  try {
    const userData = req.body
console.log("userData")
    let user = await User.findOne({ email: userData.email })
    if (user) {
      return res.status(400).json({
        message: "User already exists. Try different email!"
      })
    }

    // hash password
    const hashPassword = await bcrypt.hash(userData.password, 10)
 console.log(hashPassword)
    user = new User({ ...userData, password: hashPassword })
    const savedUser = await user.save()

    res.status(201).json({
      message: "User successfully registered!",
      user: {
        id: savedUser._id,
        email: savedUser.email
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Error registering user", error })
  }
})


// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        message: "User not found! Please register first!"
      })
    }

    // compare password
    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return res.status(400).json({
        message: "Password is wrong"
      })
    }

    const token = jwt.sign(
      { id: user._id },
  "masai",
      { expiresIn: "10m" }
    )

    res.status(200).json({
      message: "Login successful",
      token
    })

  } catch (error) {
    res.status(500).json({ message: "Error in login", error })
  }
})

module.exports = router