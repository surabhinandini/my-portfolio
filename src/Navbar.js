import React, { useState } from "react";
import "./Navbar.css";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Surabhi Nandini</div>

        {/* Desktop menu */}
        <ul className="menu">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <button onClick={() => handleScroll(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <ul className="mobile-menu">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <button onClick={() => handleScroll(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
