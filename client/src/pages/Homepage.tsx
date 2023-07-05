import React from "react";
import Auth from "../components/features/Auth";
import { useNavigate } from "react-router-dom";

const Homepage = (props: any) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!props.loggedIn) {
      navigate("/");
    }
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
