import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/portfolio" className="btn">
        Home
      </Link>
      <Link to="/projects" className="btn">
        Projects
      </Link>
      <Link to="/contact" className="btn">
        Contact
      </Link>
      <p className="footer-text">
        © {new Date().getFullYear()} A systematic development for portfolio uses
      </p>
    </footer>
  );
}
