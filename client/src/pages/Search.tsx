import React from "react";
import Auth from "../components/features/Auth";
import Main from "../components/search/Main";

const Search = (props: any) => {
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
    <div
      className="h-auto flex-col mb:flex m-auto border-2"
      style={{ width: "95%" }}
    >
      <div className="h-auto w-full mb:w-5/6 flex items-center justify-center">
        <Main />
      </div>
      <div className="h-auto w-full mb:w-1/6"></div>
    </div>
  );
};

export default Search;
