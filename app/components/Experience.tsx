"use client";
import React from "react";
import FadeIn from "./FadeIn";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Vedaz",
      period: "Feb 2026",
      description: "Integrated API-based workflows with proper validation and error handling using Remix. Improved performance and SEO by optimizing schema, routes, and implementing lazy loading. Managed version control with Git.",
    },
    {
      role: "Technical Training Internship",
      company: "Android Development",
      period: "June 2025 - July 2025",
      description: "Completed an industry-style training program in Android Development over 2 months. Built 2 major applications using Kotlin, Jetpack, and MVVM architecture.",
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <span className="text-sm font-mono text-gray-500 mb-4 block">WHERE I&apos;VE BEEN</span>
        <h2 className="text-4xl font-bold mb-12 font-display">Experience</h2>
      </FadeIn>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row md:items-start justify-between border-l-2 border-white/10 pl-6 md:pl-8 py-2 relative hover:border-cyan-500/50 transition-colors">
              <div className="absolute w-4 h-4 rounded-full bg-black border-2 border-cyan-500 -left-[9px] top-4"></div>
              <div className="md:w-1/3 mb-4 md:mb-0 pt-2">
                <span className="text-sm font-mono text-cyan-500 block">{exp.period}</span>
                <h3 className="text-2xl font-bold mt-2 text-white">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mt-1">{exp.company}</h4>
              </div>
              <div className="md:w-2/3 md:pt-2">
                <p className="text-gray-400 leading-relaxed text-lg">{exp.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
