import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import App from "./App";

import Loginpage from "./pages/loginpage"; //TODO: Renamed
import Home from "./pages/Home";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//TODO: Solve redirect problem then remove this

// ReactDOM.render(
//   <React.StrictMode>
//     {/*<Loginpage />*/}
//     <Home/>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
