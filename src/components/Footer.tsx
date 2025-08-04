import "../css/Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <button type="button" className="btn">
        Home
      </button>
      <button type="button" className="btn">
        Projects
      </button>
      <button type="button" className="btn">
        Contact
      </button>
      <p className="footer-text">
        © {new Date().getFullYear()} A systematic development for portfolio uses
      </p>
    </footer>
  );
}
