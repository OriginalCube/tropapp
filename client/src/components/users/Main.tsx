import React from "react";
import UserHeader from "./UserHeader";
import Feed from "./Feed";

const Main = (props: any) => {
  return (
    <div className="w-5/6 h-auto mt-24 flex-col">
      <UserHeader
        userDetails={props.userDetails}
        id={props.id}
        getUserInfo={props.getUserInfo}
      />

      {props.posts.length > 0 ? (
        <div className="w-full h-full bg-white rounded-md mt-16 shadow-md">
          {props.posts.map((e: any, index: number) => (
            <Feed
              key={index}
              userDetails={props.userDetails}
              author={e.author}
              post={e.post}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
