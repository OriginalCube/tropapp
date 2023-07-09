import axios from "axios";

const api_url = "/api/v1";
const userKey = localStorage.getItem("tropApp");

const follow = async (id) => {
  const Follow = await axios.get(api_url + `/follow/following/${id}`, {
    headers: { authorization: `Bearer ${userKey}` },
  });
  console.log(Follow);
};

const Follow = { follow };

export default Follow;
