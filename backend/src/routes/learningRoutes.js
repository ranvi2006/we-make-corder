const express = require("express");
const router = express.Router();
const { getLearningPaths } = require("../controllers/learningController");

router.get("/", getLearningPaths);

module.exports = router;
