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
    const getOwnPost = await Post.getAllPost();
    if (getOwnPost) setPosts(getOwnPost.data);
  };

  React.useEffect(() => {
    getUserDetails();
    getUserPost();
  }, []);

  return (
    <div className="w-5/6 h-auto mt-24 flex-col ">
      <TextField userDetails={userDetails} getUserPost={getUserPost} />
      {posts.length > 0 ? (
        <div className="h-auto w-full flex-col items-center justify-center shadow-md rounded-md mt-16 bg-white mb-10">
          {posts.map((e, index) => (
            <Feed
              key={index}
              post={e.post}
              date={e.date}
              author={e.author}
              getUserPost={getUserPost}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
