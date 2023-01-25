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

  // console.log(req.body);
  try {
    // checking user already exists or not
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(202).json({
        message: "User already exists",
        succes: false,
      });
    }

    // creating a new user
    const newUser = new User(req.body);
    const user = await newUser.save();
    user.password = undefined;
    res.status(201).json({
      message: "user created",
      user,
    });
  } catch (error) {
    // server error response for now!!
    res.json({
      message: "something went wrong!!",
    });
  }
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check user signin or not not
    const userExist = await User.findOne({ email });
    if (userExist) {
      // check user password
      const comparedPass = await bcrypt.compare(password, userExist.password);
      // password match login succesfull response
      userExist.password = undefined;
      if (comparedPass) {
        res.status(200).json({
          message: "Login succesfull",
          user: userExist,
          succes: true,
        });
      }
      // password not match response
      else {
        res.status(202).json({
          succes: false,
          message: "wrong creadential's",
        });
      }
    }
    //  user not found with this email response
    else {
      res.status(202).json({
        succes: false,
        message: "wrong creadential's",
      });
    }
  } catch (error) {
    // server error response for now!!
    res.json({
      succes: false,
      message: "something went wrong!!",
    });
  }
});

// get all user

router.get("/allusers", async (req, res) => {
  try {
    const alluser = await User.find({}, { password: 0 });
    res.status(200).json({
      succes: true,
      alluser,
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "something went wrong!!",
    });
  }
});

// get specific user on bloodgroup

router.get("/search", async (req, res) => {
  const { bloodgroup } = req.query;

  try {
    const alluser = await User.find(
      {
        bloodGroup: { $regex: bloodgroup, $options: "i" },
      },
      { password: 0 }
    );
    res.status(200).json({
      succes: true,
      alluser,
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "something went wrong!!" + error.message,
    });
  }
});

// update user

router.put("/update/:id", async (req, res) => {
  const userid = req.params.id;

  try {
    const user = await User.findByIdAndUpdate(userid, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "updated succesfully",
      user,
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "something went wrong!!" + error.message,
    });
  }
});

module.exports = router;
