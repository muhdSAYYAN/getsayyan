"use client";

import { selfData } from "@/components/Constants/SelfData";
import { quentine, mono } from "@/app/font";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";
import { ArrowRight } from "lucide-react";

export const About = () => {
  const router = useRouter();
  return (
    <section id="about" className="w-full py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <GsapFade direction="up" distance={40} duration={0.8}>
          <p className="text-xs tracking-[0.4em] text-neutral-400 mb-6 uppercase ">
            Behind The Code
          </p>

          {/* Main Heading */}
          <h2 className="font-bold leading-none mb-8">
            <span className="block text-white text-6xl md:text-7xl font-black  ">
              Building
            </span>

            <span className="block text-6xl md:text-7xl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-b from-white via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
              Legacy
            </span>
          </h2>

          {/* Description */}
          <p
            className={`${mono.className} text-neutral-400 text-lg leading-relaxed max-w-xl`}
          >
            {selfData.bio}
          </p>

          <button 
            onClick={() => router.push("/about")}
            className="mt-10 group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Read My Full Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </GsapFade>

        {/* RIGHT SIDE */}
        <GsapFade
          direction="up"
          distance={40}
          duration={0.9}
          className="space-y-10"
        >
          {/* Quote */}
          <p className="text-neutral-300 text-lg leading-relaxed border-l border-neutral-700 pl-6">
            &ldquo;Programming is not just about writing code; it&apos;s about
            engineering solutions that stand the test of time and scale with
            your vision.&rdquo;
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-6 text-sm tracking-widest text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Scalable Architecture
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Clean UI & UX Design
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Performance Optimization
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Modern API Design
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Agile Development
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              Scalable MERN Systems
            </div>
          </div>
        </GsapFade>
      </div>
    </section>
  );
};
