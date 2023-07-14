const express = require("express");
const router = express.Router();
const {
  createAccount,
  loginAccount,
  getAuth,
  getUserDetails,
  getUserInfo,
  getMultipleUsers,
  getInfo,
  getKey,
  updateUser,
  getUsername,
} = require("../controllers/UserController");

const { protect } = require("../middlewares/AuthMiddleware");

router.post("/register", createAccount);

router.post("/login", loginAccount);

router.get("/auth", protect, getAuth);

router.get("/userData", protect, getUserDetails);

router.get("/info/:id", protect, getUserInfo);

router.get("/accounts/:id", protect, getMultipleUsers);

router.get("/account/:id", protect, getInfo);

router.get("/key", protect, getKey);

router.post("/update", protect, updateUser);

router.get("/username", protect, getUsername);

module.exports = router;
