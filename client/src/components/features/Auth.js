import axios from "axios";

const api_url = "/api/v1";

const checkCon = async () => {
  const getData = await axios.get(api_url);
  return getData.data;
};

const Auth = { checkCon };

export default Auth;
