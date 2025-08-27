// src/Portfolio.js
import React from "react";
import { motion } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

import Navbar from "./Navbar";
import Cursor from "./Cursor";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ id, delay = 0, children }) => (
  <motion.section
    id={id}
    className="h-screen flex items-center scroll-mt-24 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);

export default function Portfolio() {
  return (
    <div className="scroll-smooth relative bg-black text-white">
      {/* Custom cursor */}
      <Cursor />

      {/* Top Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 max-w-5xl mx-auto space-y-32">
        <Section id="home"><Home /></Section>
        <Section id="about" delay={0.1}><About /></Section>
        <Section id="projects" delay={0.2}><Projects /></Section>
        <Section id="skills" delay={0.3}><Skills /></Section>
        <Section id="certifications" delay={0.4}><Certifications /></Section>
        <Section id="achievements" delay={0.5}><Achievements /></Section>
      </main>
      <Footer/>
    </div>
  );
}
