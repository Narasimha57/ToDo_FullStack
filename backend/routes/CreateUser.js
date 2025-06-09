import express from 'express'
import {body, validationResult} from 'express-validator'
import User from "../models/User.js";
const router = express.Router()
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let jwtSecret = "HelloHiIamAMERNDeveloper"

router.post(
    "/signup",
    [
      body("fname", "First Name is required").notEmpty(),
      body("lname", "Last Name is required").notEmpty(),
      body("email", "Enter a valid email").isEmail(),
      body("phone", "Enter a valid phnone number").isNumeric(),
      body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
    ],
    async (req, res) => {
      console.log("request body:", req.body);
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Validation Errors:", errors.array());
        return res.status(400).json({ success: false, errors: errors.array() });
      }
  
      try {
        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);
  
        await User.create({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          password: securePassword,
          phone: req.body.phone,
        });
  
        console.log("User successfully created");
        res.json({ success: true, message: "User successfully created!" });
        res.json({ success: true });
      } catch (error) {
        console.error("Signup error:", error);
        res.json({ success: false });
      }
    }
  );
  
  
  router.post(
    "/loginuser",
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let email = req.body.email;
      try {
        let userData = await User.findOne({ email });
        // console.log("User found:", userData);
        if (!userData) {
          return res.status(400).json({ errors: "Invalid Credentials" });
        }
        const pwdCompare = await bcrypt.compare(
          req.body.password,
          userData.password
        );
        // console.log("User Data Found:", userData);
        if (!pwdCompare) {
          return res.status(400).json({ errors: "Invalid Credentials" });
        }
  
        const data = {
          user: {
            id: userData.id,
          },
        };
        let authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken });
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );
  
  export default router;