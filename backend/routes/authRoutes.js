const router = require("express").Router();
const bcrypt = require("bcrypt");

// model imports
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const salt = 10;
  const hasedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hasedPassword;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(403).json({
        message: "User already Exists",
      });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json({
      message: "user created",
      user,
    });
  } catch (error) {
    res.json({
      message: "something went wrong!!",
    });
  }
});

module.exports = router;
