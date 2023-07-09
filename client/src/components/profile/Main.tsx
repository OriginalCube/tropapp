import React from "react";
import TextField from "./TextField";
import Feed from "../homepage/Feed";
import EditProfile from "./EditProfile";

const Main = (props: any) => {
  const [edit, setEdit] = React.useState(false);
  return (
    <div className="h-auto w-5/6 flex-col items-center justcify-normal">
      <TextField
        userDetails={props.userDetails}
        getUserPost={props.getUserPost}
        setEdit={setEdit}
        edit={edit}
      />
      {edit ? (
        <div className="w-full h-80 flex items-center justify-center mt-16 m-auto h-80 bg-white rounded-md shadow-md">
          <EditProfile />
        </div>
      ) : null}{" "}
      {props.posts ? (
        <div className="h-auto w-full flex-col items-start justify-center shadow-md rounded-md mt-16 bg-white mb-10">
          {props.posts.map((e: any, index: number) => (
            <Feed
              key={index}
              post={e.post}
              date={e.date}
              author={e.author}
              getUserPost={props.getUserPost}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
