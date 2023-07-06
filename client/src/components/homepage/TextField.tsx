import React from "react";

const TextField = (props: any) => {
  return (
    <div className="w-5/6 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
      <div
        className="h-full flex items-center justify-center"
        style={{ width: "10%" }}
      >
        <div className="h-full w-4/6 flex justify-center items-center">
          <img
            src={`./assets/profile/${props.profile}.webp`}
            className="h-auto w-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ width: "85%" }}
        className="h-5/6 rounded-md border-2 border-gray-800"
      >
        <input type="text" className="h-full w-full" />
      </div>
    </div>
  );
};

export default TextField;
