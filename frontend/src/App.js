// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/loginpage";
import Expense from "./components/Expense";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";
// import Singleproject from "./pages/Singleproject";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/expense' element={<Expense />} />
        <Route path='/project' element={<Project />} />
        <Route path='/prjlisting' element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
