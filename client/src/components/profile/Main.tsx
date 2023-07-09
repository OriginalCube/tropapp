import React from "react";
import TextField from "./TextField";
import Feed from "../homepage/Feed";

const Main = (props: any) => {
  return (
    <div className="h-auto w-5/6 flex-col items-center justcify-normal">
      <TextField
        userDetails={props.userDetails}
        getUserPost={props.getUserPost}
      />
      {props.posts ? (
        <div className="h-auto w-full flex-col items-start justify-center shadow-md rounded-md mt-16 bg-white mb-10">
          {props.posts.map((e: any, index: number) => (
            <Feed
              key={index}
              author={e.user}
              post={e.post}
              id={e._id}
              getUserPost={props.getUserPost}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
