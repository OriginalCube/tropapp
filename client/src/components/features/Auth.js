import axios from "axios";

const api_url = "/api/v1";
const userKey = localStorage.getItem("tropApp");

const checkCon = async () => {
  const getData = await axios.get(api_url);
  return getData.data;
};

const getAuth = async () => {
  const getData = await axios.get(api_url + "/user/auth", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  if (getData.status === 200) {
    return true;
  } else {
    return false;
  }
};

const getKey = async () => {
  const GetKey = await axios.get(api_url + "/user/key", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  if (GetKey) {
    return GetKey.data._id;
  }
};

const registerAccount = async (data) => {
  const createAccount = await axios.post(api_url + "/user/register", data);
  return createAccount;
};

const loginAccount = async (data) => {
  const loginAccount = await axios.post(api_url + "/user/login", data);
  return loginAccount;
};

const getUserDetails = async () => {
  const getData = await axios.get(api_url + "/user/userData", {
    headers: { authorization: `Bearer ${userKey}` },
  });
  if (getData) {
    return getData.data;
  } else {
    console.log(getData.data.message);
  }
};

const Auth = {
  checkCon,
  registerAccount,
  loginAccount,
  getAuth,
  getUserDetails,
  getKey,
  userKey,
};

export default Auth;
