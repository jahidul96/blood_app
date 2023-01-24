const Post = require("../models/postModel");

const router = require("express").Router();

// grave all post
router.get("/allposts", async (req, res) => {
  try {
    const allposts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", { password: 0 });
    res.status(200).json({
      totalPost: allposts.length,
      succes: true,
      allposts,
    });
  } catch (error) {
    res.status(404).json({
      message: "something went wrong",
      errorMsg: error.message,
      succes: false,
    });
  }
});

// create post
router.post("/createpost", async (req, res) => {
  try {
    const newpost = new Post(req.body);
    const postdata = await newpost.save();
    res.status(201).json({
      message: "succes",
      postData: postdata,
    });
  } catch (error) {
    res.status(404).json({
      message: "something went wrong",
      errorMsg: error.message,
      succes: false,
    });
  }
});

module.exports = router;
