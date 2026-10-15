import "../css/NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavBarProps {
  brandName?: string;
  imageSrcPath?: string;
}

const texts = ["Vincent", "サチエルピ", "Web Dev", "Portfolio"];

const navLinks = [
  { to: "/portfolio", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function NavBar({ brandName = "Jabolmaster", imageSrcPath }: NavBarProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/projects?q=${encodeURIComponent(q)}` : "/projects");
  };

  useEffect(() => {
    const currentWord = texts[textIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow custom-navbar fixed-top">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand custom-brand">
          <img src={imageSrcPath} className="brand-logo" alt="Logo" />
          <span className="brand-text typewriter">{displayText}</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto flex-column flex-sm-row justify-content-center align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="navbar-search" role="search" onSubmit={handleSearch}>
            <input
              className="navbar-search-input"
              type="search"
              placeholder="Search projects"
              aria-label="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="navbar-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
