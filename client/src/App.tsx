import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./components/sections/Discover/Discover";
import Community from "./components/sections/Community";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="App border border-4 border-black min-h-screen">
        <div>Nova*</div>
        <div>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/community">Community</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
