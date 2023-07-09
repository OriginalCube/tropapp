import React from "react";
import User from "../features/User";

const TextField = (props: any) => {
  const [search, setSearch] = React.useState("");

  const getUsers = async (data: string) => {
    const GetUsers = await User.getUsers(data);
    if (GetUsers) {
      props.setUsers(GetUsers);
    }
  };

  React.useEffect(() => {
    getUsers(search);
  }, [search]);

  return (
    <div className="w-full h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
      <div
        className="h-full flex items-center justify-center"
        style={{ width: "10%" }}
      >
        <div className="h-full w-4/6 flex justify-center items-center">
          <img
            src={`./assets/profile/${props.userDetails.picture}.webp`}
            className="h-auto w-full rounded-full"
            alt=""
          />
        </div>
      </div>
      <div style={{ width: "88%" }} className="h-5/6 flex-col">
        <div className="w-full h-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-full w-full text-xl font-light p-4 rounded-md outline-none"
            placeholder="Find User!"
          />
        </div>
      </div>
    </div>
  );
};

export default TextField;
