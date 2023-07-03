import React from "react";

const Account = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-4/6 w-1/2 border-2 border-gray-800 rounded-md shadow-xl bg-white">
        <div className="h-full w-full flex text-white">
          <div className="h-full w-2/6 bg-gray-800 flex items-center justify-center">
            <div className="h-5/6 w-full flex-col">
              <p className="w-full text-2xl text-center">Welcome to TropApp!</p>
            </div>
          </div>
          <div className="h-full w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
