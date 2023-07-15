import React from "react";
import Main from "../components/chat/Main";
import { useParams } from "react-router-dom";

const ChatBox = (props: any) => {
  const { id } = useParams();

  React.useEffect(() => {
    props.socket.emit("join_room", id);
  }, []);

  return (
    <div className="w-full h-full">
      <Main
        code={id}
        socket={props.socket}
        personalMessages={props.personalMessages}
      />
    </div>
  );
};

export default ChatBox;
