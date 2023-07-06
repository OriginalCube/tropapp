const express = require("express");
const router = express.Router();
const {
  createAccount,
  loginAccount,
  getAuth,
  getUserDetails,
} = require("../controllers/UserController");

const { protect } = require("../middlewares/AuthMiddleware");

router.post("/register", createAccount);

router.post("/login", loginAccount);

router.get("/auth", protect, getAuth);

router.get("/userData", protect, getUserDetails);

module.exports = router;
