const Follow = require("../models/FollowModel");
const User = require("../models/UserModel");

const following = async (req, res) => {
  const { id } = req.params;

  const isFollowing = await Follow.findOne({ follower: req.user._id });

  if (!isFollowing) {
    //Not following anyone
    const following = await User.findOne({ username: id });
    if (!following) {
      res.status(200).json({ message: "User does not exist!" });
    }
    const createFollowing = await Follow.create({
      follower: req.user._id,
      following: following._id,
    });
    if (createFollowing) {
      res.status(200).json({ message: "Successful follow" });
    }
  } else {
    //is Following someone
    const following = await User.findOne({ username: id });
    if (!following) {
      res.status(200).json({ message: "User does not exist!" });
    }
    const isFollowing = await Follow.findOne({
      follower: req.user._id,
      following: following._id,
    });

    if (isFollowing) {
      const unFollow = await Follow.findByIdAndUpdate(isFollowing._id, {
        $pull: { following: following._id },
      });
      console.log(unFollow);
      res.status(200).json({ message: "Sucessfully unfollowed." });
    } else {
      const willFollow = await Follow.findOneAndUpdate(
        { follower: req.user._id },
        {
          $addToSet: { following: following._id },
        }
      );
      console.log(willFollow);
      res.status(200).json({ message: "Sucessfully followed." });
    }
  }
};

module.exports = { following };
