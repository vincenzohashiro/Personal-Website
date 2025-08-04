import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";

function App() {
  return (
    <Router basename="/Personal-Website">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
