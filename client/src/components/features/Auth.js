import axios from "axios";

const api_url = "/api/v1";

const checkCon = async () => {
  const getData = await axios.get(api_url);
  return getData.data;
};

const getAuth = async () => {
  const getData = await axios.get(api_url + "/user/auth", {
    headers: { authorization: `Bearer ${localStorage.getItem("tropApp")}` },
  });
  if (getData.status === 200) {
    return true;
  } else {
    return false;
  }
};

const registerAccount = async (data) => {
  const createAccount = await axios.post(api_url + "/user/register", data);
  console.log(createAccount);
  return createAccount;
};

const loginAccount = async (data) => {
  const loginAccount = await axios.post(api_url + "/user/login", data);
  return loginAccount;
};

const Auth = { checkCon, registerAccount, loginAccount, getAuth };

export default Auth;
