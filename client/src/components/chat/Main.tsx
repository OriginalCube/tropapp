import React from "react";
import Chatbox from "./Chatbox";
import Chat from "../features/Chat";

const Main = (props: any) => {
  const { socket } = props;
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);

  const onMessage = async () => {
    if (message.length > 0) {
      const createMessage = await Chat.createMessage(message, props.code);
      await socket.emit("send_message", createMessage);
      messageList.push(createMessage);
      setMessageList([...messageList]);
    }
  };

  React.useEffect(() => {
    socket.on("receive_message", (data: any) => {
      messageList.push(data);
      setMessageList([...messageList]);
    });
  }, [socket]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-full w-full flex-col">
        <div className="w-full" style={{ height: "85%" }}>
          {messageList.length > 0 ? (
            <div
              className="overflow-y-scroll m-auto"
              style={{ height: "90vh", width: "90%" }}
            >
              {messageList.map((e: any, index: number) => (
                <Chatbox
                  key={index}
                  picture={e.picture}
                  username={e.username}
                  id={e.id}
                  message={e.message}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div
          className="w-5/6 flex items-center m-auto justify-center bg-white rounded-md shadow-md border-2"
          style={{ height: "10%" }}
        >
          <div className="h-5/6" style={{ width: "95%" }}>
            <textarea
              className="w-full h-full outline-none text-xl p-4"
              value={message}
              placeholder="Write here!"
              onChange={(e) => setMessage(e.target.value)}
              cols={15}
              rows={10}
            ></textarea>
          </div>
          <div
            className="h-full flex items-center justify-center"
            style={{ width: "5%" }}
          >
            <img
              onClick={onMessage}
              src="./assets/icons/paper-plane.png"
              className="w-1/2 h-auto cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
