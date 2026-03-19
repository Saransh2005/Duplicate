"use client";
import React from "react";
import FadeIn from "./FadeIn";

export default function Education() {
  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 8.40",
      location: "Punjab, India",
      period: "Since Aug 2023"
    },
    {
      school: "Wisdom Public School",
      degree: "Intermediate & Matriculation",
      score: "Intermediate: 80% | Matriculation: 93%",
      location: "Aligarh, Uttar Pradesh",
      period: "April 2020 - March 2023"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <span className="text-sm font-mono text-gray-500 mb-4 block">ACADEMICS</span>
        <h2 className="text-4xl font-bold mb-12 font-display">Education</h2>
      </FadeIn>
      <div className="space-y-8">
        {education.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.school}</h3>
                  <h4 className="text-lg text-cyan-400">{edu.degree}</h4>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0 font-mono text-sm text-gray-500">
                  <p>{edu.location}</p>
                  <p>{edu.period}</p>
                </div>
              </div>
              <p className="text-gray-300 font-medium">{edu.score}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
