const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./db");

require("dotenv").config();

// module imports
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const messageRoutes = require("./routes/message");
const conversationRoutes = require("./routes/conversation");

// app initialize
const app = express();

// Port
const PORT = 3000;

// middlewares
app.use(express.json());

// endpoint for request
app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/message", messageRoutes);
app.use("/conversation", conversationRoutes);

// db connection

mongoose.set("strictQuery", true);
dbConnection()
  .then(() => console.log("db connetcted"))
  .catch((e) => console.log(e.message));

// server port run
app.listen(PORT, () => console.log("server is running"));
