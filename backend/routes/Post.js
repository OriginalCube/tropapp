const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/AuthMiddleware");
const { createPost, getUserPost } = require("../controllers/PostController");

router.post("/create", protect, createPost);

router.get("/user", protect, getUserPost);

module.exports = router;
