const Counseling = require("../models/Counseling");

exports.bookCounseling = async (req, res) => {
  try {
    const session = await Counseling.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: "Failed to book counseling" });
  }
};

exports.getAllCounseling = async (req, res) => {
  try {
    const sessions = await Counseling.find().sort({ createdAt: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch counseling data" });
  }
};
