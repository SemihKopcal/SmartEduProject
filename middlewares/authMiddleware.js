const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
   // let user = User.findById(req.session.userID);
    if (!(req.session.userID)) return res.redirect('/login');
    next();
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
