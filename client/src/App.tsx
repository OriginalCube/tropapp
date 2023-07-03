import React from "react";
import axios from "axios";
import Auth from "./components/features/Auth";

function App() {
  const [con, setCon] = React.useState("");

  const run = async () => {
    const data = await Auth.checkCon();
    setCon(data);
  };

  React.useEffect(() => {
    run();
  }, []);

  return <div>{con}</div>;
}

export default App;
