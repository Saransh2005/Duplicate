"use client";
import React from "react";
import FadeIn from "./FadeIn";

export default function Certifications() {
  const certifications = [
    { title: "Android Developer Pro | Play Store Launch", issuer: "LPU", year: "June 2025 - July 2025" },
    { title: "Master Generative AI & AI tools", issuer: "Infosys", year: "Aug 2025 - Sept 2025" },
    { title: "Cloud Computing", issuer: "NPTEL", year: "Jan 2025 - April 2025" }
  ];

  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <span className="text-sm font-mono text-gray-500 mb-4 block">CONTINUOUS LEARNING</span>
        <h2 className="text-4xl font-bold mb-12 font-display">Certifications & Courses</h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-colors h-full">
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-cyan-500 mt-4 font-mono">{cert.year}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
