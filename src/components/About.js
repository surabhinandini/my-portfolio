import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section text-white px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
      
      {/* Professional Introduction */}
      <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-center leading-relaxed">
        I am a Dedicated developer skilled in Java, Spring Boot, Python, REST APIs, MySQL, and experienced in AWS, Docker, CI/CD, and Linux. Passionate about building scalable, secure applications, solving complex problems, and delivering impactful solutions. Open to opportunities to contribute, grow, and drive successful outcomes.
      </p>
      
      {/* Education Section */}
      <div className="education max-w-3xl mx-auto text-left bg-gray-900 p-6 rounded-xl shadow-lg">
        <h3 className="font-semibold mb-4 text-2xl text-center">Education</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Bachelor of Technology in Computer Science & Engineering</strong>, DRK Institute of Science and Technology (2021–2025), Bowrampet | GPA: 6.9
          </li>
          <li>
            <strong>Intermediate (MPC)</strong>, Sri Chaitanya Junior College (2019–2021), Chintal | GPA: 6.8
          </li>
          <li>
            <strong>High School (SSC)</strong>, NSKK High School (2018–2019), Gagillapur | GPA: 8.7
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
