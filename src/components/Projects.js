import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Cloud Job Failure Prediction",
    category: "AI & Cloud",
    description:
      "Predicting job failures using Google Cluster Trace data and ensemble learning.",
    image: "/project1.jpg", // ✅ if in public/, else /projects/project1.jpg
    github: "https://github.com/surabhinandini/AI-Cloud-Job-Failure-Prediction",
    live: "",
  },
  {
    title: "Cloud Resource Autoscaler",
    category: "React & Flask", // ✅ updated as you asked
    description:
      "AI-powered autoscaler for microservices — predicts and allocates resources.",
    image: "/project2.jpg", // ✅ check path
    github: "https://github.com/surabhinandini/cloud-resource-autoscaler",
    live: "",
  },
  {
    title: "Secure Cloud Deduplication",
    category: "Security & Storage",
    description:
      "Bloom-filter + re-encryption solution for secure and space-efficient dedup.",
    image: "/project3.jpg", // ✅ check path
    github: "https://github.com/surabhinandini/secure-cloud-deduplication",
    live: "",
  },
  {
  title: "My Personal Portfolio",
  category: "Portfolio",
  description: "React-based portfolio website showcasing my projects, skills, achievements, and contact info.",
  image: "/project4.jpg",
  github: "https://github.com/surabhinandini/my-portfolio",
  live: ""
}
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-media">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-gradient" />
                <div className="project-overlay">
                  <span className="project-category">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-actions">
                    {p.github && (
                      <a
                        className="project-button"
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    )}
                    {p.live && (
                      <a
                        className="project-button outline"
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
