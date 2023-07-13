import React from "react";

const Chatbox = (props: any) => {
  return (
    <div className="h-20 w-full flex mt-12">
      <div
        className="h-auto flex items-center justify-center"
        style={{ width: "10%" }}
      >
        <img
          className=" w-1/2 h-auto rounded-full"
          src={`./assets/profile/${props.picture}.webp`}
          alt=""
        />
      </div>
      <div className="h-auto" style={{ width: "90%" }}>
        <p className="text-xl font-bold">
          {props.username} #
          <span className="text-base font-medium">{props.id}</span>
        </p>
        <p className="text-base text-justify font-thin">{props.message}</p>
      </div>
    </div>
  );
};

export default Chatbox;
