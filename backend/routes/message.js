const Message = require("../models/message");

const router = require("express").Router();

// post a message
router.post("/", async (req, res) => {
  try {
    const newmessage = new Message(req.body);
    const message = await newmessage.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all message by conversation id

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
