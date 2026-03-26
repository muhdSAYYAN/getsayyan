"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { GsapFade } from "./GsapFade";

const faqData = [
  {
    id: "01",
    question: "WHAT IS YOUR TYPICAL PROJECT TIMELINE?",
    answer:
      "A bespoke website usually takes 4 to 8 weeks depending on complexity. This includes strategy, design, and high-end development.",
  },
  {
    id: "02",
    question: "HOW DO WE STAY IN TOUCH DURING THE PROJECT?",
    answer:
      "We keep communication simple and flexible. We can connect through Google Meet for regular catch-ups, and I’ll keep you updated on progress at every stage. You can reach out anytime if you need changes, clarifications, or quick support—I’ll be there to assist you throughout the project.",
  },
  {
    id: "03",
    question: "DO YOU OFFER POST-LAUNCH SUPPORT?",
    answer:
      "Yes, I provide maintenance packages to keep your site updated, secure, and performing at its peak.",
  },
  {
    id: "04",
    question: "WHAT IS YOUR PRICING STRUCTURE?",
    answer:
      "Pricing is value-based and depends on the scope. I provide a fixed-fee quote after our initial discovery call.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("01"); // First one open by default

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 bg-transparent text-white font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
            ASSISTANCE
          </p>
          {/* <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">
            COMMON <br /> QUESTIONS
          </h2> */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
            COMMON <br />
            <span className="block text-6xl md:text-7xl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-b from-white via-neutral-500 to-neutral-700 bg-clip-text text-transparent">
              QUESTIONS
            </span>
          </h2>
        </div>
        <p className="text-xs tracking-widest text-white/50 max-w-[200px] text-right uppercase">
          Transparent answers to streamline our collaboration process.
        </p>
      </div>

      {/* Accordion List */}
      <div className="border-t border-white/10">
        {faqData.map((item) => (
          <div key={item.id} className="border-bottom border-white/10">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full py-8 flex justify-between items-center group transition-colors hover:text-white/70"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span className="text-xs font-medium text-white/30">
                  {item.id}
                </span>
                <span className="text-lg md:text-2xl font-bold text-left uppercase tracking-tight">
                  {item.question}
                </span>
              </div>

              <div
                className={`transition-transform duration-300 ${openId === item.id ? "rotate-45" : "rotate-0"}`}
              >
                <Plus className="w-6 h-6 stroke-[1.5px]" />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openId === item.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-8 ml-12 md:ml-24 max-w-2xl text-white/60 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
