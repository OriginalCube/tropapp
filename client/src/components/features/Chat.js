import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000/");
const userKey = localStorage.getItem("tropApp");
const api_url = "/api/v1";

const joinRoom = (body) => {
  socket.emit("join_room", body);
};

const createMessage = async (message, room) => {
  const getUserInfo = await axios.get(api_url + `/user/userData`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  if (!getUserInfo) {
    //if no user found...
    return null;
  }
  const data = {
    message: message,
    username: getUserInfo.data.username,
    room: room,
    id: getUserInfo.data.id,
    picture: getUserInfo.data.picture,
  };
  return data;
};

const getAuthor = async () => {
  const getUsername = await axios.get(api_url + `/user/username`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return getUsername.data;
};

const Chat = { joinRoom, createMessage, getAuthor };

export default Chat;
