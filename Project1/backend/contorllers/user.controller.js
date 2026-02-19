require("dotenv").config();
const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackList = require("../blackList");
const auth = require("../middlewares/auth");
const checkAccess = require("../middlewares/checkAccess");
const ROLES = require("../constants/roles");

const router = express.Router();

// get all user
router.get("/", auth, checkAccess(ROLES.ADMIN), async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "get all users", count: users.length, user: users });
  } catch (error) {
    res.status(500).json({ message: "error to get all user", error: error });
  }
});

// get a single user
router.get("user/:id", auth, checkAccess(ROLES.ADMIN), async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res
      .status(200)
      .json({ message: "get a particular user users", user: users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error to get particular user", error: error });
  }
});

// create register route
router.post("/register", async (req, res) => {
  try {
    const userData = req.body;
    // console.log(userData)
    // check user already exits
    let user = await User.findOne({ email: userData.email });
    if (user) {
      return res
        .status(400)
        .json({ message: "user already exits. Try different email" });
    }

    // hash password
    const SALTROUNDS =Number(process.env.SALTROUNDS) || 10;
    const hashPassword = await bcrypt.hash(userData.password, SALTROUNDS);

    user = new User({ ...userData, password: hashPassword });
    let savedUser = await user.save();
    res
      .status(201)
      .json({
        message: `${user.name} registerd successfully!`,
        user: savedUser,
      });
      console.log(savedUser)
  } catch (error) {
    res.status(500).json({ message: "Registering error...", error: error });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not exits. Please register first!" });
    }

    // compare password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Password wrong!" });
    }

    // generate token

    const SECRET_KEY = process.env.SECRET_KEY
    const token = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: "20d" });
    res
      .status(200)
      .json({
        message: `${user.name} logged successfully!`,
        token,
        userId: user._id,
      });
  } catch (error) {
    res.status(500).json({ message: "login error....", error: error });
  }
});

// logout
router.get("/logout", (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({ message: "Token missing" });
    }
    const token = authHeader.split(" ")[1];

    if (token) {
      blackList.add(token);
    }
    res.status(200).json({ message: "logout successfuly!" });
  } catch (error) {
    res.status(500).json({ message: "logout error...", error: error });
  }
});
module.exports = router;
