import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      {/* Background overlay */}
      <div className="overlay"></div>

      {/* Profile Image */}
      <div className="profile-container">
        <img src="/myphoto.jpg" alt="Surabhi Nandini" className="profile-img" />
      </div>

      {/* Content */}
      <div className="home-content">
        <h1 className="title">Hi, I'm Surabhi Nandini</h1>
        <p className="subtitle">
          Tech Enthusiast | Backend, Cloud & Software Development Opportunities Welcome
        </p>

        {/* Resume Button */}
        <div className="button-group">
          <a href="/resume.pdf" download className="btn primary-btn">
            Resume
          </a>
        </div>

        {/* Hire Me Section */}
        <div className="hireme-group">
          {/* Email Button */}
          <a href="mailto:surabhinandini4@gmail.com" className="hireme-icon email" title="Email">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
              alt="Email"
            />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/surabhi-nandini-30aaa5276"
            target="_blank"
            rel="noopener noreferrer"
            className="hireme-icon linkedin"
            title="LinkedIn"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/660/862/non_2x/linkedin-logo-on-transparent-isolated-background-free-vector.jpg"
              alt="LinkedIn"
            />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/surabhinandini"
            target="_blank"
            rel="noopener noreferrer"
            className="hireme-icon github"
            title="GitHub"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
