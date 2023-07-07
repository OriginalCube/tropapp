import React from "react";
import Auth from "../features/Auth";

const RegisterFormat = (props: any) => {
  const [err, setErr] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeRegister = (x: string, y: string) => {
    props.setRegisterInput({ ...props.registerInput, [x]: y });
  };

  React.useEffect(() => {
    if (password !== props.registerInput.password) {
      setErr("Password does not match.");
    } else {
      setErr("");
    }
  }, [password, props.registerInput.password]);

  const onRegister = async (e: any) => {
    e.preventDefault();
    const register = await Auth.registerAccount(props.registerInput);
    console.log(register);
    if (register.status === 201) {
      props.setHasAccount(true);
    }
  };

  return (
    <form className="w-full h-full" onSubmit={onRegister}>
      <div className="h-full w-full flex-col text-black">
        <div className="w-full h-1/6 flex justify-between">
          <input
            value={props.registerInput.firstname}
            onChange={(e) => changeRegister("firstname", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="Firstname"
            required={true}
            type="text"
          />
          <input
            value={props.registerInput.lastname}
            onChange={(e) => changeRegister("lastname", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="Lastname"
            required={true}
            type="text"
          />
        </div>
        <div className="w-full h-1/6 flex justify-evenly">
          <input
            value={props.registerInput.username}
            onChange={(e) => changeRegister("username", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none w-full  rounded-sm h-2/3"
            placeholder="Username"
            required={true}
            minLength={4}
            type="text"
          />
        </div>
        <div className="w-full h-1/6 flex justify-between">
          <input
            value={props.registerInput.password}
            onChange={(e) => changeRegister("password", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="Password"
            required={true}
            minLength={5}
            type="password"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="Confirm Password"
            required={true}
            minLength={5}
            type="password"
          />
        </div>
        <div className="w-full h-1/6 flex justify-evenly">
          <input
            value={props.registerInput.email}
            onChange={(e) => changeRegister("email", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none w-full  rounded-sm h-2/3"
            placeholder="Email"
            required={true}
            type="email"
          />
        </div>
        <div className="w-full h-1/6 flex justify-between">
          <input
            value={props.registerInput.id}
            onChange={(e) => changeRegister("id", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="Custom ID"
            required={true}
            maxLength={5}
            minLength={5}
            type="text"
          />
          <input
            value={props.registerInput.birthday}
            onChange={(e) => changeRegister("birthday", e.target.value)}
            className="p-4 border-gray-800 border-2 outline-none rounded-sm h-2/3"
            style={{ width: "49%" }}
            placeholder="01/01/2001"
            required={true}
            type="date"
          />
        </div>
        <div className="w-full h-20 flex-col">
          {err.length > 0 ? (
            <p className="w-full text-center text-red-500">{err}</p>
          ) : null}
          <div className="w-full h-2/3 flex items-center justify-center">
            <button className="h-full p-2 border-2 border-gray-800 w-1/3 rounded-md mt-10 hover:bg-gray-800 hover:text-white">
              Create Account
            </button>{" "}
          </div>
        </div>
      </div>{" "}
    </form>
  );
};

export default RegisterFormat;
