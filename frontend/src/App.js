import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
<<<<<<< Updated upstream

function App() {
  return <div>hello</div>;
=======
import Singleproject from "./pages/Singleproject";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Loginpage />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
>>>>>>> Stashed changes
}

export default App;
