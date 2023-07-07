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

const updatePost = async (req, res) => {
  const { post } = req.body;
  const { id } = req.params;

  const isExist = await Post.findById(id);

  if (!isExist) {
    res.status(401).json({ message: "Post does not exist." });
  }

  const updatingPost = await Post.findByIdAndUpdate(
    id,
    { post: post },
    { new: true }
  );
  console.log(updatingPost);
  if (updatingPost) {
    res.status(200).json({ message: "Succesfully Updated..." });
  } else {
    res.status(401).json({ message: "Unsucessfully Updated..." });
  }
};

module.exports = { createPost, getUserPost, updatePost };
