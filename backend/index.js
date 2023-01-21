const express = require("express");
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

//check route
app.get("/", (req, res) => {
  res.json({
    message: "this is home route",
  });
});

// server port run
app.listen(PORT, () => console.log("server is running"));
