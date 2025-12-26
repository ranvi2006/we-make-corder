require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const seedAdmin = require("./seedAdmin");

const startServer = async () => {
  try {
    await connectDB(); // 👈 wait for MongoDB

    // Seed admin after DB connection (safe, doesn't exit)
    seedAdmin().catch((err) => console.error("seedAdmin error", err));

    const PORT = process.env.PORT || 3000;

    app.listen((PORT || 3000), () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
