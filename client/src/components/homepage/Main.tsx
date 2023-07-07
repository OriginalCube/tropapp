import React from "react";
import TextField from "./TextField";
import Auth from "../features/Auth";
import Post from "../features/Post";
import Feed from "./Feed";

const Main = () => {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    email: "",
    picture: "",
    id: "",
    firstname: "",
    lastname: "",
    birthday: "",
  });
  const [posts, setPosts] = React.useState([]);

  const getUserDetails = async () => {
    const getData = await Auth.getUserDetails();
    setUserDetails(getData);
  };

  const getUserPost = async () => {
    const getOwnPost = await Post.getUserPost();
    setPosts(getOwnPost.data);
  };

  React.useEffect(() => {
    getUserDetails();
    getUserPost();
  }, []);

  React.useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="w-full h-auto mt-24 flex-col">
      <TextField userDetails={userDetails} getUserPost={getUserPost} />
      {posts.length > 0 ? (
        <div className="h-auto w-5/6 flex-col items-center justify-center shadow-md rounded-md mt-16 bg-white mb-10">
          {posts.map((e, index) => (
            <Feed
              key={index}
              author={e.user}
              post={e.post}
              id={e._id}
              getUserPost={getUserPost}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
