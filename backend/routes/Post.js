const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/AuthMiddleware");
const {
  createPost,
  getUserPost,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

router.post("/create", protect, createPost);

router.get("/user", protect, getUserPost);

router.put("/update/:id", protect, updatePost);

router.delete("/delete/:id", protect, deletePost);

module.exports = router;
