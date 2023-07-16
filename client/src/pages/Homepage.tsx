import React from "react";
import Auth from "../components/features/Auth";
import { useNavigate } from "react-router-dom";
import Main from "../components/homepage/Main";

const Homepage = (props: any) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!props.loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-auto md:flex flex-col m-auto" style={{ width: "95%" }}>
      <div className="h-auto border-2 w-full md:w-5/6 flex justify-center items-center">
        <Main />
      </div>
      <div className="h-auto md:w-1/6 w-full"></div>
    </div>
  );
};

export default Homepage;
