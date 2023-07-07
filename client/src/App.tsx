import React from "react";
import Auth from "./components/features/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";
import Search from "./pages/Search";
import User from "./pages/User";

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
    <BrowserRouter>
      <div className="h-full w-full flex">
        {loggedIn ? (
          <div className="w-1/6 h-full">
            <Navigation />
          </div>
        ) : null}
        <div className={`${loggedIn ? "w-5/6" : "w-full"} bg-gray-200 h-full`}>
          <Routes>
            <Route index element={<Account setLoggedIn={setLoggedIn} />} />
            <Route path="home" element={<Homepage loggedIn={loggedIn} />} />
            <Route
              path="search"
              element={<Search setLoggedIn={setLoggedIn} />}
            />
            <Route path="/:id" element={<User setLoggedIn={setLoggedIn} />} />
          </Routes>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
