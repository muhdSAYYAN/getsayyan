"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "CHOCOLATE POS DASHBOARD",
    desc: "A comprehensive point-of-sale system and dashboard built specifically for a high-traffic chocolate shop.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    img: "/images/chocolate.jpeg",
  },
  {
    id: "02",
    title: "ABATE AS",
    desc: "A fully digital Electronic Medical Records (EMR) platform developed to modernize clinic operations.",
    tools: ["React", "Node.js", "PostgreSQL"],
    img: "/images/abate.jpeg",
  },
  {
    id: "03",
    title: "SWA DIAMONDS",
    desc: "A breathtaking digital storefront and catalog for a luxury diamond jewelry brand.",
    tools: ["React", "Next.js", "Node.js"],
    img: "/images/swa.png",
  },
  {
    id: "04",
    title: "VELOTA",
    desc: "A versatile dashboard interface and accompanying lightning-fast static website.",
    tools: ["Next.js", "TypeScript", "GSAP"],
    img: "/images/velota.jpeg",
  },
];

export default function SelectedWorks() {
  const router = useRouter();
  const leftColumn = projects.filter((_, index) => index % 2 === 0);
  const rightColumn = projects.filter((_, index) => index % 2 !== 0);

  return (
    <section
      id="works"
      className="w-full py-16 md:py-24 text-white px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
            CASE STUDIES
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none">
              SELECTED <br />
              <span className="block text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-b from-white via-neutral-500 to-neutral-700 bg-clip-text text-transparent">
                WORKS
              </span>
            </h2>
            
            <button 
              onClick={() => router.push("/works")}
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-sm font-bold tracking-widest uppercase">View All Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col gap-14 md:hidden">
          {projects.map((project, idx) => (
            <GsapFade
              key={project.id}
              direction="up"
              distance={50}
              duration={0.8}
              delay={idx * 0.1}
              className="flex flex-col group w-full"
            >
              <div className="relative w-full h-[300px] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div 
                  onClick={() => router.push("/works")}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <span className="text-sm tracking-[0.3em] font-bold">
                    VIEW CASE STUDY
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 italic">{project.desc}</p>
              </div>
            </GsapFade>
          ))}
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex flex-row gap-x-20 items-start">
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-y-10">
            {leftColumn.map((project, idx) => (
              <GsapFade
                key={project.id}
                direction="up"
                distance={50}
                duration={0.8}
                delay={idx * 0.1}
                className="flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-sm tracking-[0.3em] font-bold">
                      VIEW
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed mt-2">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap lg:justify-end gap-2 shrink-0">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 transition-all cursor-default hover:scale-105 hover:border-white/40"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapFade>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 flex flex-col gap-y-10 mt-64">
            {rightColumn.map((project, idx) => (
              <GsapFade
                key={project.id}
                direction="up"
                distance={50}
                duration={0.8}
                delay={idx * 0.1}
                className="flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-sm tracking-[0.3em] font-bold">
                      VIEW
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 italic">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-end gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 transition-all cursor-default hover:scale-105 hover:border-white/40"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
