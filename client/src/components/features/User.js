import axios from "axios";

const api_url = "/api/v1";
const userKey = localStorage.getItem("tropApp");

const getUserData = async (data) => {
  const getUserInfo = await axios.get(api_url + `/user/info/${data}`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return getUserInfo;
};

const getUsers = async (body) => {
  if (body.length !== 0) {
    const GetUsers = await axios.get(api_url + `/user/accounts/${body}`, {
      headers: { authorization: `Bearer ${userKey}` },
    });
    if (GetUsers) {
      return GetUsers.data;
    }
  }
};

const User = { getUserData, getUsers };

export default User;
