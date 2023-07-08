const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/AuthMiddleware");
const {
  createPost,
  getUserPost,
  updatePost,
  deletePost,
  getPost,
} = require("../controllers/PostController");

router.post("/create", protect, createPost);

router.get("/user", protect, getUserPost);

router.get("/user/:id", protect, getPost);

router.put("/update/:id", protect, updatePost);

router.delete("/delete/:id", protect, deletePost);

module.exports = router;
