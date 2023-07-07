import React from "react";
import UserHeader from "./UserHeader";

const Main = (props: any) => {
  return (
    <div className="w-5/6 h-auto mt-24">
      <UserHeader userDetails={props.userDetails} />
    </div>
  );
};

export default Main;
