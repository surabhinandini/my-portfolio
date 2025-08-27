import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Certifications = () => {
  // Show only 3 certifications here
  const topCertifications = [
    {
      title: "AWS Solutions Architecture",
      platform: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_HfKvHGzxAyzaNFSrE_1753280812525_completion_certificate.pdf"
    },
    {
      title: "Web Development (HTML, CSS, JS, Bootstrap, React)",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-285b5129-16c9-4eb0-bc64-7af18001343b/"
    },
    {
      title: "Responsive Web Design",
      platform: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/surabhi_nandini/responsive-web-design"
    }
  ];

  // All certifications (for view all)
  const allCertifications = [
    ...topCertifications,
    {
      title: "500+ Difficulty Problems Solved (Java, Python)",
      platform: "CodeChef",
      link: "https://www.codechef.com/certificates/preview/2f97aba"
    },
    {
      title: "AWS for Beginners",
      platform: "Simplilearn",
      link: "https://lms.simplilearn.com/courses/6001/AWS%20for%20Beginners:%20First%20step%20to%20start%20your%20Cloud%20Computing%20career/certificate/download-skillup"
    },
    {
      title: "Python for Beginners",
      platform: "Simplilearn",
      link: "https://lms.simplilearn.com/courses/4214/Python-for-Beginners/certificate/download-skillup"
    },
    {
      title: "Reliance Foundation Front-End Development",
      platform: "RF Skilling Academy",
      link: "https://rfskillingacademy.com/certificate/group/330/201522"
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      variants={sectionVariants}
    >
      <div className="background-placeholder">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>

      <div className="content">
        <h2 className="title">Certifications</h2>
        <p className="subtitle">Click below to view each of my professional certifications</p>

        <ul className="certifications-grid">
          {topCertifications.map((cert, idx) => (
            <li key={idx} className="cert-card">
              <strong>{cert.title}</strong>
              <span className="platform"> – {cert.platform}</span>
              <a href={cert.link} target="_blank" rel="noreferrer" className="btn">
                View Certificate
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/drive/folders/1-cqVeEUW1evIapgwDtiUWhYSwB7eLntV?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn view-all"
        >
          View All Certifications
        </a>
      </div>
    </motion.section>
  );
};

export default Certifications;
