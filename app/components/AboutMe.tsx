"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-black">
      <div className="grid md:grid-cols-2 min-h-[700px]">

        {/* LEFT: Who I am */}
        <div className="p-12 md:p-24 flex flex-col justify-center border-r border-white/10">
          <FadeIn>
            <span className="text-sm font-mono text-gray-500 mb-4 block">ABOUT ME</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight">
              Hi, I&apos;m Saransh.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              I am a passionate developer, designer, and strategist.
              I don&apos;t just write code; I craft digital experiences that solve real-world problems.
              From complex <strong>Machine Learning</strong> models to scalable <strong>Web and Mobile Apps</strong>, I build solutions from the ground up.
            </p>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="text-white font-medium tracking-widest uppercase text-sm hover:text-gray-400 transition border-b border-white/0 hover:border-white pb-1 inline-flex"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT: Image */}
        <div className="relative h-[500px] md:h-auto bg-neutral-900 overflow-hidden group">
          <Image
            src="/saransh.jpeg"
            alt="Saransh Singh"
            fill
            //className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
