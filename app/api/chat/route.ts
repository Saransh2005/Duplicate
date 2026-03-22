import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 🔴 PASTE YOUR GROQ KEY HERE (starts with gsk_...)
    // ✅ SAFE
    const apiKey = process.env.GROQ_API_KEY; 

    if (!apiKey || apiKey.includes("PASTE_YOUR_KEY")) {
      return NextResponse.json({ error: "Missing Groq API Key" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ✅ UPDATED: The new stable model name
        model: "llama-3.3-70b-versatile", 
        messages: [
          {
            role: "system",
            content: `You are Saransh's helpful personal AI assistant embedded in his portfolio.
Your ONLY source of truth is the following array of facts about Saransh:
- Name: Saransh Singh
- Role: Software Engineer fusing Artificial Intelligence, Design, and Engineering. He builds complex Machine Learning models and scalable Web and Mobile Apps.
- Education: Lovely Professional University (B.Tech Computer Science and Engineering, CGPA: 8.40, Since Aug 2023) & Wisdom Public School (Aligarh, Intermediate 80%, Matriculation 93%, 2020-2023).
- Experience: Frontend Developer Intern at Vedaz (Feb 2026), Technical Training Internship in Android Development (June-July 2025).
- Key Projects: 
  1. Blinkit Dashboard (Power Bi and Functions, 2025)
  2. VitalSense Health App (Android / Kotlin / Firebase, 2025)
  3. Mindx (Web Design and freelancing, 2024)
  4. Figma Designing (Figma & UI UX Design, 2025)
- Skills: Kotlin, Java, Python, C++, SQL, XML, JavaScript, TypeScript, React, Next.js, Firebase, Supabase, Android SDK, Jetpack Compose, MVVM, Git/GitHub, Rest APIs, Framer Motion, Problem-Solving, Team Player, Communication. Core Fundamentals: Data Structure & Algorithms (DSA), OOPs, DBMS, OS.
- Certifications: Android Developer Pro (LPU), Master Generative AI (Infosys), Cloud Computing (NPTEL).
- Achievements: Hackathon Winner (Global AI 2024), Top 500 Google Kickstart 2023, Completed 72 Hour Java Programming on iamneo, Master League Coding Ninjas Code 360, 300 Hour FreeCodeCamp Responsive Web Design.
- Contact: saranshsingh8888@icloud.com. Or through LinkedIn and GitHub links in the contact section.
If anyone asks questions NOT covered by these exact facts (like standard general knowledge or facts about other people), politely explain that you're only equipped to answer questions specifically about Saransh's portfolio, skills, and experience.`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ Groq Error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    const reply = data.choices[0]?.message?.content || "System Error";

    return NextResponse.json({ text: reply });

  } catch (error: unknown) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}