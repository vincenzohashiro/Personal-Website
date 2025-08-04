import "../css/NavBar.css";
import React, { useState, useEffect } from "react";

interface NavBarProps {
  brandName?: string;
  imageSrcPath?: string;
}

const texts = ["Jabolmaster", "サザシジス"];

function NavBar({ brandName = "Jabolmaster", imageSrcPath }: NavBarProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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
      <div className="container-fluid">
        <a className="navbar-brand custom-brand" href="#">
          <img
            src={imageSrcPath}
            className="d-inline-block align-center brand-logo"
            alt=""
          />
          <span className="brand-text typewriter">{displayText}</span>
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="App.tsx">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Arma
                </a>
                <a className="dropdown-item" href="#">
                  Clothing Line
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Flutter Designs
                </a>
                <a className="dropdown-item" href="#">
                  Further Projects
                </a>
              </div>
            </li>
          </ul>
          <form className="navbar-search">
            <input
              className="navbar-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
