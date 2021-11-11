import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import App from "./App";

import Loginpage from "./pages/loginpage"; //TODO: Renamed

ReactDOM.render(
  <React.StrictMode>
    <Loginpage />
  </React.StrictMode>,
  document.getElementById("root")
);
