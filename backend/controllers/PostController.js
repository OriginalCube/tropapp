const Post = require("../models/PostModel");

const createPost = async (req, res) => {
  const { data } = req.body;
  const uploadPost = await Post.create({
    user: req.user._id,
    post: data,
  });

  if (uploadPost) {
    res.status(200).json({ message: "Successfully uploaded..." });
  } else {
    res.status(401).json({ message: "Error in uploading..." });
  }
};

const getUserPost = async (req, res) => {
  const getOwnPost = await Post.find({ user: req.user._id });
  console.log(getOwnPost);
  if (getOwnPost) {
    res.status(200).json(getOwnPost);
  } else {
    res.status(401).json({ message: "Recieved successfully." });
  }
};

module.exports = { createPost, getUserPost };
