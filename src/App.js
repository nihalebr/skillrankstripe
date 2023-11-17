import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <div className="app">
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
