"use client";
import React from "react";
import FadeIn from "./FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <FadeIn>
        <span className="text-sm font-mono text-gray-500 mb-4 block">MILESTONES & CONTRIBUTIONS</span>
        <h2 className="text-4xl font-bold mb-12 font-display">Achievements</h2>
      </FadeIn>
      
      <div className="space-y-16">
        <FadeIn delay={0.1}>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">▹</span>
              <span>Completed 72 Hour Java Programming on iamneo platform.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">▹</span>
              <span>Master League status on Coding Ninjas Code 360 leaderboard.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">▹</span>
              <span>Completed 300 Hour FreeCodeCamp Responsive Web Design.</span>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
