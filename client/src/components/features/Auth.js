import axios from "axios";

const api_url = "/api/v1";

const checkCon = async () => {
  const getData = await axios.get(api_url);
  return getData.data;
};

const registerAccount = async (data) => {
  const createAccount = await axios.post(api_url + "/user/register", data);
  return createAccount;
};

const loginAccount = async (data) => {
  const loginAccount = await axios.post(api_url + "/user/login", data);
  return loginAccount;
};

const Auth = { checkCon, registerAccount, loginAccount };

export default Auth;
