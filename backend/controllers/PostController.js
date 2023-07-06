const Post = require("../models/PostModel");

const createPost = async (req, res) => {
  const uploadPost = await Post.create({
    id: req.user.id,
    post: req.body.res,
  });

  console.log(uploadPost);
  res.send(req.body);
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
