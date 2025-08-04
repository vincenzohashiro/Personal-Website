import "../css/Footer.css";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false); // scrolling down → hide footer
      } else {
        setVisible(true); // scrolling up → show footer
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${visible ? "show" : "hide"}`}>
      <button type="button" className="btn">
        Home
      </button>
      <button type="button" className="btn">
        Projects
      </button>
      <button type="button" className="btn">
        Contact
      </button>

      <p>
        © {new Date().getFullYear()} A systematic development for portfolio uses
      </p>
    </footer>
  );
}
