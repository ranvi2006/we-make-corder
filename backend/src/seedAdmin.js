require("dotenv").config();
const Admin = require("./models/Admin");

const seedAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({
      email: "admin@wemakecorder.com",
    });

    if (adminExists) {
      console.log("Admin already exists");
      return;
    }

    await Admin.create({
      name: "Raju Kumar Mandal",
      email: "admin@wemakecorder.com",
      password: "Admin@123",
    });

    console.log("Admin created successfully");
  } catch (error) {
    console.error("Failed to seed admin:", error);
  }
};

module.exports = seedAdmin;