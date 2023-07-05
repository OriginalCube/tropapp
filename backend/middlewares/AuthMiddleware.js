const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.TROPAPP_SECRET);

      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      res.status(401).json({ message: "User does is not logged in." });
    }
  }

  if (!token) {
    res.send("Not Token.");
  }
};

module.exports = { protect };
