const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

// MongoDB 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error:", err));

// Existing chat route
app.use("/api/chat", require("./routes/chat"));

app.use("/api/memory", require("./routes/memory"));

app.listen(5000, () => console.log("Server running"));