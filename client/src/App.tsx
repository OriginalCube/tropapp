import React from "react";
import Auth from "./components/features/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";
import Search from "./pages/Search";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import io from "socket.io-client";
import ChatCon from "./components/features/Chat";
import ChatBox from "./pages/ChatBox";

const socket = io("http://localhost:5000/");

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [personalMessages, setPersonalMessages] = React.useState([]);
  const [username, setUsername] = React.useState("");

  const authCheck = async () => {
    const getAuth = await Auth.getAuth();
    setLoggedIn(getAuth);
  };

  //Chat reference for personal messages
  const getAuthor = async () => {
    if (loggedIn) socket.emit("join_room", await ChatCon.getAuthor());
    setUsername(await ChatCon.getAuthor());
  };

  React.useEffect(() => {
    authCheck(); //Checks auth
    getAuthor(); //Connect socket to user chat
  }, [loggedIn]);

  React.useEffect(() => {
    socket.on("receive_message", (data: any) => {
      personalMessages.push(data);
      setPersonalMessages([...personalMessages]);
    });
  }, [socket]);

  return (
    <BrowserRouter>
      <div className="h-full w-full flex">
        {loggedIn ? (
          <div className="w-1/6 h-full">
            <Navigation notif={personalMessages.length} username={username} />
          </div>
        ) : null}
        <div className={`${loggedIn ? "w-5/6" : "w-full"} bg-gray-200 h-full`}>
          <Routes>
            <Route index element={<Account setLoggedIn={setLoggedIn} />} />
            <Route path="home" element={<Homepage loggedIn={loggedIn} />} />
            <Route
              path="search"
              element={<Search setLoggedIn={setLoggedIn} />}
            />
            <Route
              path="chat/:id"
              element={
                <ChatBox socket={socket} personalMessages={personalMessages} />
              }
            />
            <Route path="chat" element={<Chat socket={socket} />} />
            <Route path="profile" element={<Profile loggedIn={loggedIn} />} />
            <Route path="/:id" element={<User setLoggedIn={setLoggedIn} />} />
          </Routes>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
