"use client";
import React from "react";
import FadeIn from "./FadeIn";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Java", "Python", "C++", "SQL", "XML", "JavaScript", "TypeScript"]
    },
    {
      title: "Core Fundamentals",
      skills: ["Data Structure & Algorithms (DSA)", "OOPs", "DBMS", "OS"]
    },
    {
      title: "Cloud & Tools",
      skills: ["Firebase (Auth, Firestore)", "Supabase", "GitHub/Git", "Android Studio", "Figma", "Vercel"]
    },
    {
      title: "Developments",
      skills: ["Android SDK", "Jetpack Compose", "MVVM", "Git/GitHub", "Rest APIs", "Next.js", "React.js", "Framer Motion"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Team Player", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <span className="text-sm font-mono text-gray-500 mb-4 block">WHAT I DO</span>
        <h2 className="text-4xl font-bold mb-12 font-display">Skills & Technologies</h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((cat, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 h-full hover:border-cyan-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-white">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="text-gray-400 flex items-center before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-cyan-500 before:rounded-full before:mr-3">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
