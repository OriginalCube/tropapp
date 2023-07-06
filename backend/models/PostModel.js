const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const PostModel = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, require: true },
    post: { type: String, require: true },
  },
  { Timestamp: true }
);

module.exports = mongoose.model("tropapp-posts", PostModel);
