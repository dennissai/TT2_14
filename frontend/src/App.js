// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/loginpage";
// import Singleproject from "./pages/Singleproject";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
