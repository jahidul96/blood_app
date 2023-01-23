const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./db");

require("dotenv").config();

// module imports
const authRoutes = require("./routes/authRoutes");

// app initialize
const app = express();

// Port
const PORT = 3000;

// middlewares
app.use(express.json());

// endpoint for request
app.use("/auth", authRoutes);

// db connection

mongoose.set("strictQuery", true);
dbConnection()
  .then(() => console.log("db connetcted"))
  .catch((e) => console.log(e.message));

// server port run
app.listen(PORT, () => console.log("server is running"));
