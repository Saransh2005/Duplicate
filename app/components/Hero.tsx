"use client";

import React from "react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mix-blend-overlay mb-6">
            SARANSH <br /> SINGH.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            I am a Software Engineer fusing Artificial Intelligence, Design, and Engineering.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
