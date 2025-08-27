import React, { useState, useEffect } from "react";
import "./AsideMenu.css";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

const AsideMenu = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in after a short delay
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-1/3 left-0 z-50 w-52 bg-blue-600 rounded-r-xl shadow-2xl py-6 transform transition-transform duration-700 ${
        visible ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-white text-lg font-bold px-6 py-3 hover:bg-blue-500 rounded-lg transition-all duration-300"
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideMenu;
