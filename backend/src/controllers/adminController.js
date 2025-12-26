const Counseling = require("../models/Counseling");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalCounseling = await Counseling.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayCounseling = await Counseling.countDocuments({
      createdAt: { $gte: today },
    });

    res.json({
      totalCounseling,
      todayCounseling,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to load dashboard stats" });
  }
};
