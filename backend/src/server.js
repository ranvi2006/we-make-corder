require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const startServer = async () => {
  try {
    await connectDB(); // 👈 wait for MongoDB
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
