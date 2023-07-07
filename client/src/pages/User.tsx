import React from "react";
import { useParams } from "react-router-dom";
import Auth from "../components/features/Auth";
import Main from "../components/users/Main";

const User = (props: any) => {
  const id = useParams();
  const authCheck = async () => {
    const getAuth = await Auth.getAuth();
    if (getAuth) {
      props.setLoggedIn(true);
    } else {
      props.setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    authCheck();
  }, []);

  return (
    <div className="h-auto flex m-auto" style={{ width: "95%" }}>
      <div className="h-auto w-5/6 flex items-center justify-center">
        <Main />
      </div>
      <div className="h-auto w-1/6"></div>
    </div>
  );
};

export default User;
