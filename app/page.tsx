"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <ContactSection />
      
    </main>
  );
}
