// src/components/Achievements.js
import React from "react";
import "./Achievements.css"; // import CSS

function Achievements() {
  const achievements = [
    {
      title: "Hackathon Participation",
      description:
        "Participated in hackathon showcased innovative project idea in agritech.",
      link: "https://drive.google.com/file/d/1aO0NL4FpjW2Qx8FcNJ1NlIGyzdqoaSo_/view?usp=sharing",
      linkText: "View Certificate",
    },
    {
      title: "CodeChef",
      description:
        "Solved 500+ problems in Java & Python, improving problem-solving skills.",
      link: "https://www.codechef.com/users/worth_array_74",
      linkText: "View Profile",
    },
    {
      title: "LeetCode",
      description:
        "Solved 150+ problems and built strong foundations in data structures & algorithms.",
      link: "https://leetcode.com/u/Nandini_Surabhi/",
      linkText: "View Profile",
    },
  ];

  return (
    <div className="achievements-container">
      <h2 className="achievements-title">Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
