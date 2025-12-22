const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");




const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/learning-paths", require("./routes/learningRoutes"));
app.use("/api/counseling", require("./routes/counselingRoutes"));

app.get("/", (req, res) => {
  res.send("We Make Corder API is running");
});
// after routes
app.use(errorHandler);

module.exports = app;
