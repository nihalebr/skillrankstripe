import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Subscription from "./pages/Subscription";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Cookie from "./components/Cookie";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/canceled" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
