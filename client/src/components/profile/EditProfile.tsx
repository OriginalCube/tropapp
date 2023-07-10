import React from "react";
import Auth from "../features/Auth";
import User from "../features/User";

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

  const updateUserDetails = async (e: any) => {
    const updateUser = await User.updateUser(userDetails);
    if (!updateUser) {
      e.preventDefault();
    }
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <form
      onSubmit={updateUserDetails}
      className="w-full h-full flex items-center justify-center"
    >
      <div
        className="h-full flex-col items-center justify-center"
        style={{ width: "90%" }}
      >
        <div className="w-full h-1/4 flex items-center gap-2 justify-between mt-4">
          <div className="w-1/2 h-auto flex-col ">
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
              min={5}
              value={userDetails.username}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
            />{" "}
          </div>
          <div className="w-1/2 h-auto flex-col">
            <p className="pl-1 font-light text-sm">id</p>
            <input
              className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
              type="text"
              min={5}
              required={true}
              value={userDetails.id}
              onChange={(e) =>
                setUserDetails({ ...userDetails, id: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-full h-1/4 flex items-center gap-2 justify-between mt-4">
          <div className="w-full h-auto flex-col">
            <p className="pl-1 font-light text-sm">Username</p>
            <input
              className="border-2 border-gray-800 w-full h-full p-2 text-xl font-medium outline-none"
              type="email"
              required={true}
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />{" "}
          </div>
        </div>
        <button
          className="float-right mt-10 border-blue-400 text-white shadow-md hover:bg-slate-200 hover:text-blue-400
        bg-blue-400 border-2 p-2 w-20 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
