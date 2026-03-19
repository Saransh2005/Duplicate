"use client";
import React from "react";
import FadeIn from "./FadeIn";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mjgalodz");

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto bg-neutral-900 rounded-2xl mb-20 border border-white/5">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <FadeIn>
             <h2 className="text-4xl font-bold mb-8 font-display">Let&apos;s Connect</h2>
             <p className="text-gray-400 leading-relaxed mb-8">
               I&apos;m currently looking for new opportunities, whether it&apos;s a full-time role, a freelance project, or just a chat about technology.
               My inbox is always open.
             </p>
             <div className="space-y-4 font-mono text-sm">
                <a href="mailto:saranshsingh8888@icloud.com" className="block text-white hover:text-cyan-400 transition break-all">
                  saranshsingh8888@icloud.com
                </a>
                <a href="https://linkedin.com/in/saranshsingh" target="_blank" rel="noreferrer" className="block text-white hover:text-cyan-400 transition">
                  LinkedIn Profile
                </a>
                <a href="https://github.com/saranshsingh" target="_blank" rel="noreferrer" className="block text-white hover:text-cyan-400 transition">
                  GitHub Profile
                </a>
             </div>
          </FadeIn>
        </div>
        <div className="bg-black/40 p-8 rounded-xl border border-white/5">
           <FadeIn delay={0.2}>
              {state.succeeded ? (
                  <div className="bg-green-900/20 border border-green-500 text-green-200 p-6 rounded-lg text-lg">
                      Thank you! Your message has been sent successfully.
                  </div>
              ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div>
                        <label htmlFor="name" className="block text-sm text-gray-500 mb-2">Name</label>
                        <input id="name" type="text" name="name" required className="w-full bg-transparent border-b border-white/10 focus:border-cyan-500 outline-none py-2 text-white transition-colors" placeholder="John Doe" />
                     </div>
                     <div>
                        <label htmlFor="email" className="block text-sm text-gray-500 mb-2">Email</label>
                        <input id="email" type="email" name="email" required className="w-full bg-transparent border-b border-white/10 focus:border-cyan-500 outline-none py-2 text-white transition-colors" placeholder="john@example.com" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                     </div>
                     <div>
                        <label htmlFor="message" className="block text-sm text-gray-500 mb-2">Message</label>
                        <textarea id="message" name="message" required className="w-full bg-transparent border-b border-white/10 focus:border-cyan-500 outline-none py-2 text-white transition-colors min-h-[100px]" placeholder="Hello Saransh..." />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                     </div>
                     <button type="submit" disabled={state.submitting} className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition-colors w-full sm:w-auto disabled:opacity-50">
                        {state.submitting ? "Sending..." : "Send Message"}
                     </button>
                  </form>
              )}
           </FadeIn>
        </div>
      </div>
    </section>
  );
}
