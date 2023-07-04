import React from "react";
import axios from "axios";
import Auth from "./components/features/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";

function App() {
  const [auth, setAuth] = React.useState("");

  React.useEffect(() => {
    console.log(auth.length + " auth length");
  }, [auth]);

  return (
    <div className="h-full w-full flex">
      {auth.length > 0 ? (
        <div className="w-1/6 bg-gray-800">
          <Navigation />
        </div>
      ) : null}
      <BrowserRouter>
        <div
          className={`${
            auth.length > 0 ? "w-5/6" : "w-full"
          } bg-gray-200 h-full`}
        >
          <Routes>
            <Route index element={<Account setAuth={setAuth} />} />
            <Route path="home" element={<Homepage />} />
          </Routes>{" "}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
