import axios from "axios";

const api_url = "/api/v1";
const userKey = localStorage.getItem("tropApp");

const createPost = async (data) => {
  const uploadPost = await axios.post(
    api_url + "/post/create",
    { data },
    {
      headers: { authorization: `Bearer ${userKey}` },
    }
  );
  console.log(uploadPost);
  console.log("clicked");
};

const getUserPost = async (req, res) => {
  const getOwnPost = await axios.get(api_url + "/post/user", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return getOwnPost;
};

const Post = { createPost, getUserPost };

export default Post;
