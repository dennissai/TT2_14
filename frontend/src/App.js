// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Singleproject from "./pages/Singleproject";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
