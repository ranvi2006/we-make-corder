const mongoose = require("mongoose");

const CounselingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    goal: { type: String, required: true },
    message: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Counseling", CounselingSchema);
