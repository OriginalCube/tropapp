import React from "react";
import User from "../features/User";

const Feed = (props: any) => {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    picture: "",
    id: "",
  });

  const getUserInfo = async () => {
    const getData = await User.getUserData(props.author);
    setUserDetails(getData.data);
  };

  React.useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  React.useEffect(() => {
    getUserInfo();
  }, [props.user]);

  return (
    <div className="w-full h-full flex p-2">
      <div className="w-1/6 h-36 flex items-center justify-center">
        <div className="h-auto w-2/3 m-auto flex items-center justify-center">
          <img
            src={`./assets/profile/${userDetails.picture}.webp`}
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-5/6 h-auto flex items-center justify-center p-2">
        <div className="flex-col w-full h-full">
          <p className="text-base font-bold w-1/2 text-left">
            {userDetails.username}{" "}
            <span className="font-medium"> #{userDetails.id} </span>
          </p>
          <p className="text-xl justify-center">{props.post}</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Feed;
