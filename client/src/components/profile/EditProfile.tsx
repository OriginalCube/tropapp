import React from "react";
import Auth from "../features/Auth";

const EditProfile = () => {
  const [userDetails, setUserDetails] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    picture: "",
    email: "",
    id: "",
    birthday: "",
  });

  const getUserDetails = async () => {
    setUserDetails(await Auth.getUserDetails());
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div
      className="flex-col items-center justify-center"
      style={{ width: "90%" }}
    >
      <div className="w-full h-1/4 flex items-center gap-2 justify-between">
        <div className="w-1/2 h-auto flex-col">
          <p className="pl-1 font-light text-sm">Firstname</p>
          <input
            className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
            type="text"
            required={true}
            value={userDetails.firstname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstname: e.target.value })
            }
          />{" "}
        </div>
        <div className="w-1/2 h-auto flex-col">
          <p className="pl-1 font-light text-sm">Lastname</p>
          <input
            className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
            type="text"
            required={true}
            value={userDetails.lastname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastname: e.target.value })
            }
          />
        </div>
      </div>
      <div className="w-full h-1/4 flex items-center gap-2 justify-between mt-4">
        <div className="w-1/2 h-auto flex-col">
          <p className="pl-1 font-light text-sm">Username</p>
          <input
            className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
            type="text"
            required={true}
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />{" "}
        </div>
        <div className="w-1/2 h-auto flex-col">
          <p className="pl-1 font-light text-sm">Email</p>
          <input
            className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
            type="email"
            required={true}
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
