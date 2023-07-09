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
  return uploadPost;
};

const getUserPost = async () => {
  const getOwnPost = await axios.get(api_url + "/post/user", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  if (getOwnPost) {
    return getOwnPost;
  }
};

const getPost = async (id) => {
  const getPost = await axios.get(api_url + `/post/user/${id}`, {
    headers: { authorization: `Bearer ${userKey}` },
  });

  if (getPost) {
    return getPost.data;
  }
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

const deletePost = async (id) => {
  const deletingPost = await axios.delete(api_url + `/post/delete/${id}`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return deletingPost;
};

const getAllPost = async () => {
  const GetPost = await axios.get(api_url + `/post/all`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return GetPost;
};

const Post = {
  createPost,
  getUserPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
};

export default Post;
