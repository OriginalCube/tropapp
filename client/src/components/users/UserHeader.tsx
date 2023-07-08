import React from "react";

const UserHeader = (props: any) => {
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
        <p className="w-1/2 h-auto text-xl font-medium text-right pr-6 cursor-pointer hover:text-sky-500">
          Follow
        </p>
      </div>
    </div>
  );
};

export default UserHeader;
