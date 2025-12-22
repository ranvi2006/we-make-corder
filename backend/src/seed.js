require("dotenv").config();
const mongoose = require("mongoose");
const LearningPath = require("./models/LearningPath");

const data = [
  {
    title: "Frontend Developer",
    description: "HTML, CSS, JavaScript, React",
    duration: "3 Months",
    steps: ["HTML", "CSS", "JavaScript", "React", "Projects"]
  },
  {
    title: "Backend Developer",
    description: "Node.js, Express, MongoDB",
    duration: "3 Months",
    steps: ["Node.js", "Express", "MongoDB", "APIs"]
  },
  {
    title: "Full Stack Developer",
    description: "Frontend + Backend + Projects",
    duration: "6 Months",
    steps: ["Frontend", "Backend", "Database", "Deployment"]
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await LearningPath.deleteMany();
    await LearningPath.insertMany(data);
    console.log("Learning paths seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
