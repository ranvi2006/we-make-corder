const LearningPath = require("../models/LearningPath");

exports.getLearningPaths = async (req, res) => {
  try {
    const paths = await LearningPath.find();
    res.json(paths);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch learning paths" });
  }
};
