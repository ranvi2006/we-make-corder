exports.validateCounseling = (req, res, next) => {
  const { name, email, goal } = req.body;

  if (!name || !email || !goal) {
    return res.status(400).json({
      message: "Name, email and goal are required"
    });
  }

  next();
};
