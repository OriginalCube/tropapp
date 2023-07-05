import React from "react";
import LoginFormat from "../components/account/LoginFormat";
import RegisterFormat from "../components/account/RegisterFormat";
import { useNavigate } from "react-router-dom";
import Auth from "../components/features/Auth";

const Account = (props: any) => {
  const [hasAccount, setHasAccount] = React.useState(false);
  const [registerInput, setRegisterInput] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    id: "",
    birthday: "",
  });

  const [loginInput, setLoginInput] = React.useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const authCheck = async () => {
    const getAuth = await Auth.getAuth();
    if (getAuth) {
      props.setLoggedIn(true);
      navigate("/home");
    } else {
      props.setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    authCheck();
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-4/6 w-1/2 border-2 border-gray-800 rounded-md shadow-xl bg-white">
        <div className="h-full w-full flex text-white">
          <div className="h-full w-2/6 bg-gray-800 flex items-center justify-center">
            <div className="h-5/6 w-full flex-col">
              <p className="w-full text-2xl text-center">Welcome to TropApp!</p>
              <img
                alt=""
                src={`./assets/images/${
                  hasAccount ? "login" : "register"
                }.jpeg`}
                className="w-2/3 h-auto rounded-full m-auto 
                border-2 border-white shadow-md mt-10"
              />
              <p
                className="w-5/6 m-auto font-medium text-2xl text-center mt-8 cursor-pointer border-2 border-white rounded-md p-2
                  hover:bg-white hover:text-gray-800"
                onClick={() => setHasAccount(!hasAccount)}
              >
                {hasAccount ? "Create Account" : "Login Account"}
              </p>
              <p className="text-thin w-5/6 text-justify m-auto mt-6 leading-10">
                Connect, share, and spark the world with clicks, likes, and
                infinite bytes!
              </p>
            </div>
          </div>
          <div className="h-full w-4/6 flex items-center justify-center">
            <div className="h-5/6 w-5/6">
              {hasAccount ? (
                <LoginFormat
                  setLoggedIn={props.setLoggedIn}
                  loginInput={loginInput}
                  setLoginInput={setLoginInput}
                />
              ) : (
                <RegisterFormat
                  registerInput={registerInput}
                  setRegisterInput={setRegisterInput}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
