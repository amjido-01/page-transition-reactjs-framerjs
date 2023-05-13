import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoute } from "./components/AnimatedRoute";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoute />
    </Router>
  );
}

export default App;
