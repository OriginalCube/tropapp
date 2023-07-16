import React from "react";
import TextField from "./TextField";
import Auth from "../features/Auth";
import { Link } from "react-router-dom";

const Main = () => {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    email: "",
    picture: "",
    id: "",
    firstname: "",
    lastname: "",
    birthday: "",
  });
  const [users, setUsers] = React.useState([]);

  const getUserDetails = async () => {
    const getData = await Auth.getUserDetails();
    setUserDetails(getData);
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const FoundUsers = (el: any) => {
    return (
      <Link to={`/${el.username}`}>
        <div className="w-full h-12 md:h-24 flex items-center justify-center cursor-pointer mt-2">
          <div className="w-1/6 h-full flex items-center justify-center">
            <img
              className="w-auto h-8 md:h-16 rounded-full"
              src={`./assets/profile/${el.picture}.webp`}
              alt=""
            />
          </div>
          <div className="w-5/6 h-full flex items-center justify-center">
            <p className="w-full h-full text-sm md:text-2xl font-bold p-2">
              {el.username}{" "}
              <span className="font-light text-xs md:text-xl">#{el.id}</span>
            </p>
          </div>
        </div>{" "}
      </Link>
    );
  };

  return (
    <div className="h-auto w-5/6 flex-col mt-24 ">
      <TextField userDetails={userDetails} setUsers={setUsers} />
      <div className="mt-16 w-full h-auto flex items-center justify-center">
        <div className="h-auto w-full flex-col bg-white shadow-md rounded-md overflow-hidden">
          {users.length > 0
            ? users.map((e: any, index: number) => (
                <FoundUsers
                  key={index}
                  username={e.username}
                  id={e.id}
                  picture={e.picture}
                />
              ))
            : null}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Main;
