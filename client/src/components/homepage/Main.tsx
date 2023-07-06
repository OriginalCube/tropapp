import React from "react";
import TextField from "./TextField";
import Auth from "../features/Auth";
import Post from "../features/Post";

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

  const getUserDetails = async () => {
    const getData = await Auth.getUserDetails();
    console.log(getData);
    setUserDetails(getData);
  };

  const getUserPost = async () => {
    const getOwnPost = await Post.getUserPost();
    console.log(getOwnPost);
  };

  React.useEffect(() => {
    getUserDetails();
    getUserPost();
  }, []);

  return (
    <div className="w-full h-auto mt-24">
      <TextField userDetails={userDetails} />
    </div>
  );
};

export default Main;
