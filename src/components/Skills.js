import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "Bootstrap", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpAibqKIel0cbG1HCxUrlHi0q184RL4fZjw&s" },
  { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "MySQL", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
  { name: "Git", logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
  { name: "Linux", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMCyVba3hmzSLlNffCP0byltE8QE27LIkvA&s" },
  { name: "REST API", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszCXd5b0Fpuxou1hMOiLTtygtpelEtIrBBw&s" },
  { name: "AWS", logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" },
  { name: "Docker", logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { name: "DevOps", logo: "https://cdn.worldvectorlogo.com/logos/devops-2.svg" },
];

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
