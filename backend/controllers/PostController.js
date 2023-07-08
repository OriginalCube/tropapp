const Post = require("../models/PostModel");
const User = require("../models/UserModel");

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
  if (getOwnPost) {
    res.status(200).json(getOwnPost);
  } else {
    res.status(401).json({ message: "Recieved successfully." });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const GetUser = await User.findOne({ username: id });
  let postInfo = [];

  if (!GetUser) {
    res.status(401).json({ message: "No Users found..." });
  } else {
    const GetPost = await Post.find({ user: GetUser._id });
    if (!GetPost) {
      res.status(401).json({ message: "No Posts found..." });
    } else {
      GetPost.forEach((element) => {
        const createPost = {
          author: element.user,
          post: element.post,
          date: element.createdAt,
        };
        postInfo.push(createPost);
      });
      res.status(200).json(postInfo);
    }
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

  if (updatingPost) {
    res.status(200).json({ message: "Succesfully Updated..." });
  } else {
    res.status(401).json({ message: "Unsucessfully Updated..." });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const isExist = await Post.findById(id);

  console.log(isExist);

  if (!isExist) {
    res.status(401).json({ message: "Post does not exist!" });
  }

  await isExist.deleteOne();
  res.status(200).json({ message: "Sucessfully deleted..." });
};

module.exports = { createPost, getUserPost, getPost, updatePost, deletePost };
