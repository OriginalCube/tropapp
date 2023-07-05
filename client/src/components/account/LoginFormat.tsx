import React from "react";
import Auth from "../features/Auth";
import { useNavigate } from "react-router-dom";

const LoginFormat = (props: any) => {
  const navigate = useNavigate();

  const onLogin = async (e: any) => {
    e.preventDefault();
    const loginAccount = await Auth.loginAccount(props.loginInput);
    if (loginAccount.data.res.message === "logged in") {
      localStorage.setItem("tropApp", loginAccount.data.res.token);
      props.setLoggedIn(true);
      navigate("/home");
    }
  };

  return (
    <form onSubmit={onLogin}>
      <div className="w-full h-full flex-col text-black">
        <div className="w-full h-1/3 items-center justify-center flex">
          <input
            type="text"
            required={true}
            onChange={(e) =>
              props.setLoginInput({
                ...props.loginInput,
                ["username"]: e.target.value,
              })
            }
            value={props.loginInput.username}
            className="p-4 border-gray-800 border-2 outline-none w-full rounded-sm"
            placeholder="username"
          />{" "}
        </div>
        <div className="w-full h-1/3 flex items-center justify-center">
          <input
            type="password"
            required={true}
            onChange={(e) =>
              props.setLoginInput({
                ...props.loginInput,
                ["password"]: e.target.value,
              })
            }
            value={props.loginInput.passwor}
            className="p-4 border-gray-800 border-2 outline-none w-full rounded-sm mt-10"
            placeholder="password"
          />{" "}
        </div>
        <div className="h-auto w-full flex items-center justify-center">
          <button className="p-4 border-2 border-gray-800 w-1/3 rounded-md mt-10 hover:bg-gray-800 hover:text-white">
            Login
          </button>{" "}
        </div>
      </div>
    </form>
  );
};

export default LoginFormat;
