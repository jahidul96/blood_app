const router = require("express").Router();

// model imports
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    res.json({
      message: "user created",
      user: newUser,
    });
  } catch (error) {
    res.json({
      message: "something went wrong!!",
    });
  }
});

module.exports = router;
