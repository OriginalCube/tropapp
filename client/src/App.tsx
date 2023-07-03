import React from "react";
import axios from "axios";
import Auth from "./components/features/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";

function App() {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Routes>
          <Route index element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
