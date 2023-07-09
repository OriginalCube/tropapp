const mongoose = require("mongoose");

const FollowModel = mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    require: true,
  },
  following: [{ type: String, require: true }],
});

module.exports = mongoose.model("tropapp-follow", FollowModel);
