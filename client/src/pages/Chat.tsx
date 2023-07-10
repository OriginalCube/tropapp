import React from "react";
import ChatLink from "../components/features/Chat";

const Chat = (props: any) => {
  const [isJoined, setIsJoined] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onJoin = () => {
    setIsJoined(true);
    const joinRoom = ChatLink.joinRoom();
    console.log(joinRoom);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {!isJoined ? (
        <div className="w-5/6 h-1/3 bg-white rounded-md shadow-xl flex items-center justify-center">
          <div className="w-full h-1/3 flex-col items-center justify-center">
            <div className="h-1/2 w-full flex items-center justify-center">
              <p className="w-full text-center font-semibold text-2xl">
                Enter Code:
              </p>{" "}
            </div>
            <div className="h-1/2 w-full flex items-center justify-center">
              <input
                type="text"
                className="w-1/2 p-2 text-xl outline-none border-2 border-gray-800 rounded-sm"
              />{" "}
            </div>
            <div className="h-auto w-full flex items-center justify-center mt-2">
              <button
                className="border-2 border-gray-800 p-2 bg-gray-800 text-xl 
            text-white px-10 rounded-md hover:text-gray-800 hover:bg-white"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chat;
