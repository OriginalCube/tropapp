import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props: any) => {
  console.log(props.notif);
  return (
    <div className="w-full h-full">
      <div className="w-1/6 h-screen fixed bg-white shadow-md flex items-center justify-center">
        <div className="h-5/6 w-5/6 flex-col">
          <Link to={"home"}>
            {" "}
            <div className="h-16 w-full flex justify-center items-center ">
              <img
                src="/assets/icons/logo.png"
                className="h-full w-auto"
                alt=""
              />
              <button className="h-full w-3/4 text-4xl hidden md:block">
                TropApp
              </button>
            </div>{" "}
          </Link>
          <div className="h-80 w-full mt-10 flex-col">
            <Link to={"home"}>
              {" "}
              <div className="h-1/6 w-full flex items-center justify-start cursor-pointer hover:bg-sky-200 rounded-md hover:shadow-md">
                <img
                  src="/assets/icons/home.png"
                  className="h-12 w-auto"
                  alt=""
                />
                <button className="text-2xl font-medium h-full w-full text-left pl-6 hidden md:block">
                  Home
                </button>
              </div>{" "}
            </Link>
            <Link to={"search"}>
              <div className="h-1/6 w-full flex items-center justify-start cursor-pointer hover:bg-sky-200 rounded-md hover:shadow-md">
                <img
                  src="/assets/icons/search.png"
                  className="h-12 w-auto p-2"
                  alt=""
                />
                <button className="text-2xl font-medium h-full w-full text-left pl-6 hidden md:block">
                  Search
                </button>
              </div>{" "}
            </Link>
            <Link to={"profile"}>
              <div className="h-1/6 w-full flex items-center justify-start cursor-pointer hover:bg-sky-200 rounded-md hover:shadow-md">
                <img
                  src="/assets/icons/profile.png"
                  className="h-12 w-auto p-2"
                  alt=""
                />
                <button className="text-2xl font-medium h-full w-full text-left pl-6 hidden md:block">
                  Profile
                </button>
              </div>
            </Link>
            <Link to={"chat"}>
              <div className="h-1/6 w-full flex items-center justify-start cursor-pointer hover:bg-sky-200 rounded-md hover:shadow-md">
                <img
                  src="/assets/icons/chat.png"
                  className="h-12 w-auto p-2"
                  alt=""
                />
                <button className="text-2xl font-medium h-full w-full text-left pl-6 hidden md:block">
                  Chat
                </button>
              </div>
            </Link>
            <Link to={`chat/${props.username}`}>
              <div className="h-1/6 w-full flex items-center justify-start cursor-pointer hover:bg-sky-200 rounded-md hover:shadow-md">
                <img
                  src="/assets/icons/notification.png"
                  className={`h-12 w-auto p-2 rounded-xl ${
                    props.notif > 0 ? "bg-red-500" : "bg-amber-300 "
                  }`}
                  alt=""
                />
                <button className="text-xl font-medium h-full w-full text-left pl-6 hidden md:block">
                  Notifications
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
