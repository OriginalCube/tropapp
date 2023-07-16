import React from "react";
import Main from "../components/profile/Main";
import Auth from "../components/features/Auth";
import Post from "../components/features/Post";

const Profile = (props: any) => {
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

  return (
    <div className="h-auto flex m-auto" style={{ width: "95%" }}>
      <div className="w-full mb:w-5/6 h-auto flex items-center justify-center mt-24">
        <Main
          posts={posts}
          userDetails={userDetails}
          getUserPost={getUserPost}
        />
      </div>
    </div>
  );
};

export default Profile;
