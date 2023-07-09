import React from "react";
import { useParams } from "react-router-dom";
import Auth from "../components/features/Auth";
import Main from "../components/users/Main";
import user from "../components/features/User";
import Post from "../components/features/Post";

const User = (props: any) => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    picture: "",
    id: "",
    following: false,
  });
  const [posts, setPosts] = React.useState([]);

  const authCheck = async () => {
    const getAuth = await Auth.getAuth();
    if (getAuth) {
      props.setLoggedIn(true);
    } else {
      props.setLoggedIn(false);
    }
  };

  const getUserInfo = async () => {
    const getData = await user.getUser(id);
    setUserDetails(getData);
  };

  const getUserPost = async () => {
    const getPosts = await Post.getPost(id);
    if (getPosts.length > 0) {
      setPosts(getPosts);
    }
  };

  React.useEffect(() => {
    authCheck();
    getUserInfo();
    getUserPost();
  }, []);

  return (
    <div className="h-auto flex m-auto" style={{ width: "95%" }}>
      <div className="h-auto w-5/6 flex items-center justify-center">
        <Main
          userDetails={userDetails}
          posts={posts}
          id={id}
          getUserInfo={getUserInfo}
        />
      </div>
      <div className="h-auto w-1/6"></div>
    </div>
  );
};

export default User;
