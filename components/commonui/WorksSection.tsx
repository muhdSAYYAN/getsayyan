"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";
import { ArrowUpRight } from "lucide-react";

const rowOneProjects = [
  {
    id: "01",
    title: "CHOCOLATE POS | RETAIL SYSTEM",
    slug: "chocolate-pos-dashboard",
    tools: ["REACT", "NODE.JS", "TAILWIND"],
    img: "/images/chocolate.jpeg",
    span: "md:col-span-7", // BIG
    aspect: "aspect-[16/10]",
  },
  {
    id: "02",
    title: "ABATE AS | CLINICAL EMR",
    slug: "abate-emr-platform",
    tools: ["REACT", "POSTGRESQL", "EXPRESS"],
    img: "/images/abate.jpeg",
    span: "md:col-span-5", // SMALL
    aspect: "aspect-[16/10]",
  },
];

const rowTwoProjects = [
  {
    id: "03",
    title: "SWA DIAMONDS | E-COMMERCE",
    slug: "swa-diamonds",
    tools: ["NEXT.JS", "REACT", "AWS"],
    img: "/images/swa.png",
    span: "md:col-span-5", // SMALL (opposite of row 1)
    aspect: "aspect-[16/10]",
  },
  {
    id: "04",
    title: "VELOTA | ANALYTICS PORTAL",
    slug: "velota",
    tools: ["NEXT.JS", "TYPESCRIPT", "GSAP"],
    img: "/images/velota.jpeg",
    span: "md:col-span-7", // BIG (opposite of row 1)
    aspect: "aspect-[16/10]",
  },
];

export default function SelectedWorks() {
  const router = useRouter();

  return (
    <section
      id="works"
      className="w-full py-20 md:py-32 text-white px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.4em] text-white/40 uppercase mb-3 font-mono font-semibold">
              SELECTED PROJECTS
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
              CASE <span className="text-white/30 border-b border-white/20 pb-1">STUDIES</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xs md:text-right font-mono leading-relaxed">
            bespoke digital solutions for brands that value design and performance.
          </p>
        </div>

        {/* Row 1: Big Left (col-7), Small Right (col-5) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {rowOneProjects.map((project, idx) => (
            <GsapFade
              key={project.id}
              direction="up"
              distance={40}
              duration={0.7}
              delay={idx * 0.1}
              className={`${project.span} group cursor-pointer flex flex-col w-full`}
            >
              {/* Reduced Border Radius: rounded-2xl */}
              <div
                onClick={() => router.push(`/case-studies/${project.slug}`)}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 mb-4 shadow-2xl group-hover:border-white/30 transition-all duration-500"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Title & Arrow Row */}
              <div
                onClick={() => router.push(`/case-studies/${project.slug}`)}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/40 uppercase mt-1">
                    {project.tools.join(" • ")}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </GsapFade>
          ))}
        </div>

        {/* Row 2: Small Left (col-5), Big Right (col-7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {rowTwoProjects.map((project, idx) => (
            <GsapFade
              key={project.id}
              direction="up"
              distance={40}
              duration={0.7}
              delay={idx * 0.1 + 0.1}
              className={`${project.span} group cursor-pointer flex flex-col w-full`}
            >
              {/* Reduced Border Radius: rounded-2xl */}
              <div
                onClick={() => router.push(`/case-studies/${project.slug}`)}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 mb-4 shadow-2xl group-hover:border-white/30 transition-all duration-500"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Title & Arrow Row */}
              <div
                onClick={() => router.push(`/case-studies/${project.slug}`)}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/40 uppercase mt-1">
                    {project.tools.join(" • ")}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </GsapFade>
          ))}
        </div>

        {/* Centered Pill Button */}
        <div className="pt-12 text-center">
          <button
            onClick={() => router.push("/works")}
            className="px-10 py-4 rounded-full border border-white/20 bg-transparent hover:bg-white hover:text-black text-xs font-mono tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            EXPLORE ALL WORKS
          </button>
        </div>
      </div>
    </section>
  );
}
