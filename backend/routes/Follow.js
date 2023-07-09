const express = require("express");
const router = express.Router();
const { following } = require("../controllers/FollowController");

const { protect } = require("../middlewares/AuthMiddleware");

router.get("/following/:id", protect, following);

module.exports = router;
