const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/learning-paths", require("./routes/learningRoutes"));
app.use("/api/counseling", require("./routes/counselingRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("We Make Corder API is running");
});

// error handler LAST
app.use(errorHandler);

module.exports = app;
