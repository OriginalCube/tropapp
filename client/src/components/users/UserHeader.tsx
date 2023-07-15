import React from "react";
import Follow from "../features/Follow";
import { Link } from "react-router-dom";

const UserHeader = (props: any) => {
  const onFollow = async () => {
    const isFollowing = await Follow.follow(props.id);
    if (isFollowing) props.getUserInfo();
  };

  return (
    <div className="w-full h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
      <div
        className="h-full flex items-center justify-center"
        style={{ width: "10%" }}
      >
        <div className="h-full w-4/6 flex justify-center items-center">
          <img
            src={`./assets/profile/${props.userDetails.picture}.webp`}
            className="h-auto w-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div
        className="h-full flex items-center justify-center"
        style={{ width: "88%" }}
      >
        <p className="w-1/2 h-auto text-2xl font-semibold pl-6 text-left">
          {props.userDetails.username}
        </p>
        <div className="w-1/2 text-right h-auto text-xl font-medium pr-6">
          <div className="w-1/2 flex float-right ">
            <Link to={`/chat/${props.userDetails.username}`}>
              <p className="w-1/2 cursor-pointer hover:text-sky-500">Message</p>
            </Link>
            <p
              onClick={onFollow}
              className="w-1/2 cursor-pointer  h-auto hover:text-sky-500"
            >
              {props.userDetails.isFollowing ? "Following" : "Follow"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
