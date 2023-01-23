const router = require("express").Router();
const bcrypt = require("bcrypt");

// model imports
const User = require("../models/userModel");

// register route
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

// login route

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      const comparedPass = await bcrypt.compare(password, userExist.password);
      if (comparedPass) {
        res.status(200).json({
          message: "Login succesfull",
          user: userExist,
        });
      } else {
        res.status(403).json({
          message: "wrong creadential's",
        });
      }
    } else {
      res.status(403).json({
        message: "wrong creadential's",
      });
    }
  } catch (error) {
    res.json({
      message: "something went wrong!!",
    });
  }
});

module.exports = router;
