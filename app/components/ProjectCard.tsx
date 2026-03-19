"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ title, category, year, image, link }: { title: string, category: string, year: string, image: string, link?: string }) {
  const CardContent = (
    <div className="group cursor-pointer block w-full h-full">
      <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-4 rounded-sm border border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="flex justify-between items-start text-sm">
        <div>
          <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <p className="text-gray-500">{category}</p>
        </div>
        <span className="text-gray-500">{year}</span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}
