import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  // Shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="nav-container">

        {/* LOGO — image + fallback text */}
        <div className="logo">
          <img src="/images/logo.png" alt="2Frames" onError={(e)=>{e.target.style.display="none"}} />
          <span>2Frames Photography</span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => handleClick("home")} className={active==="home" ? "active" : ""} href="#home">Home</a></li>
          <li><a onClick={() => handleClick("services")} className={active==="services" ? "active" : ""} href="#services">Services</a></li>
          <li><a onClick={() => handleClick("gallery")} className={active==="gallery" ? "active" : ""} href="#gallery">Gallery</a></li>
          <li><a onClick={() => handleClick("contact")} className={active==="contact" ? "active" : ""} href="#contact">Contact</a></li>
        </ul>

        {/* MOBILE ICON */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}
             onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      </div>
    </nav>
  );
}
