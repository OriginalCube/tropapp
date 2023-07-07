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

const getUserPost = async () => {
  const getOwnPost = await axios.get(api_url + "/post/user", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return getOwnPost;
};

const updatePost = async (body) => {
  const { post, id } = body.data;
  const updatingPost = await axios.put(
    api_url + `/post/update/${id}`,
    { post },
    { headers: { authorization: `Bearer ${userKey}` } }
  );
  return updatingPost;
};

const Post = { createPost, getUserPost, updatePost };

export default Post;
