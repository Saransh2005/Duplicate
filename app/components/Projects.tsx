"use client";
import React from "react";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 font-display">Selected Projects</h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
        <ProjectCard title="Blinkit Dashboard" category="Power Bi and Functions" year="2025" image="/power.png" />
        <ProjectCard title="VitalSense Health App" category="Android / Kotlin / Firebase" year="2025" image="/vital.png" link="https://github.com/Saransh2005/VitalSense1" />
        <ProjectCard title="Mindx" category="Web Design and freelancing" year="2024" image="/free.png" link="https://www.saransh0008.in/" />
        <ProjectCard title="Figma Designing" category="Figma & UI UX Design" year="2025" image="/p4.png" link="https://www.figma.com/design/Nt5AS3LaGEIeF6PUtHtoQ7/Untitled?t=DcNgkgoM6GiQhVXz-1" />
      </div>
    </section>
  );
}
