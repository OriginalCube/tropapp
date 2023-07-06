import axios from "axios";

const api_url = "/api/v1";
const userKey = localStorage.getItem("tropApp");

const getUserData = async (data) => {
  const getUserInfo = await axios.get(api_url + `/user/info/${data}`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  return getUserInfo;
};

const User = { getUserData };

export default User;
