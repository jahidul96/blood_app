const router = require("express").Router();

const Conversation = require("../models/conversation");

// creating coversation
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.reciverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get conversation
router.get("/:id", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {
        $in: [req.params.id],
      },
    }).populate("members");

    res.status(200).json({
      total: conversation.length,
      conversation,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
