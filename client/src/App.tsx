import React from "react";
import Auth from "./components/features/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const authCheck = async () => {
    const getAuth = await Auth.getAuth();
    setLoggedIn(getAuth);
  };

  React.useEffect(() => {
    authCheck();
  }, [loggedIn]);

  return (
    <div className="h-full w-full flex">
      {loggedIn ? (
        <div className="w-1/6 bg-gray-800">
          <Navigation />
        </div>
      ) : null}
      <BrowserRouter>
        <div className={`${loggedIn ? "w-5/6" : "w-full"} bg-gray-200 h-full`}>
          <Routes>
            <Route index element={<Account setLoggedIn={setLoggedIn} />} />
            <Route path="home" element={<Homepage loggedIn={loggedIn} />} />
          </Routes>{" "}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
