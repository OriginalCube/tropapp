import React from "react";
import UserHeader from "./UserHeader";
import Feed from "./Feed";
import Chat from "../features/Chat";

const Main = (props: any) => {
  const [username, setUsername] = React.useState("");

  const getUsername = async () => {
    const name = await Chat.getAuthor();
    if (name) setUsername(name);
  };

  React.useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className="w-5/6 h-auto mt-24 flex-col">
      <UserHeader
        username={username}
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
