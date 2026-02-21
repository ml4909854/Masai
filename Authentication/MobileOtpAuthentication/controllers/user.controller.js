require("dotenv").config();
const express = require("express");
const twilio = require("twilio");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const router = express.Router();
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

router.post("/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(otp, 5);
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    let user = await User.findOne({ phone });

    if (user) {
      user.otp = hashedOtp;
      user.otpExpiresAt = otpExpiresAt;
    } else {
      user = new User({ phone, otp: hashedOtp, otpExpiresAt });
    }

    await user.save();

    await twilioClient.messages.create({
      body: `Your OTP is ${otp}. It will be valid for 5 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    const tempToken = jwt.sign({phone} , "masai" , {expiresIn:"5m"})

    res.status(200).json({ message: "OTP sent successfully!"  , tempToken});
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP!", error: error.message });
  }
});

// verif otp
router.post("/verify-otp" , async(req , res)=>{
    // first we have to find out phone
    try {
        const token = req.headers.authorization.split(" ")[1]
    if(!token){
        return res.status(404).json({message:"token not found!"})
    }

    const decoded = jwt.verify(token , "masai")
    let phone = decoded.phone
    const {otp} = req.body

     if (!otp) {
      return res.status(400).json({ message: "Otp are required" });
    }

    const user = await User.findOne({ phone }).select("+otp");

    if(!user){
        return res.status(404).json({message:"user not found!"})
    }

     // 🔴 Add this safety check
    if (!user.otp || !user.otpExpiresAt) {
      return res.status(400).json({ message: "OTP not found or already used. Please request a new OTP." });
    }

    
    if (user.otpExpiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired!" });
    }

    const isMatch = await bcrypt.compare(otp, user.otp);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

     user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    const accessToken = jwt.sign({ _id: user._id }, "accessMasai", { expiresIn: "1d" });
    res.status(200).json({ message: "OTP verified", accessToken });
    } catch (error) {
        res.status.json({message:"error to verify otp!"})
    }

})
// first route to send otp
// second route to verify otp
module.exports = router;
