"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";
import { ArrowUpRight } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  tools: string[];
  img: string;
  projectlink: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "01",
    title: "VAZHAYIL NATURAL | ECO-TECH PORTAL",
    slug: "vazhayil-natural",
    tools: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    projectlink: "https://vazhayilnatural.netlify.app/",
    img: "/images/vazhayilnatural.webp",
  },
  {
    id: "02",
    title: "QINT GROUP | MEP & HANDOVER PORTAL",
    slug: "qint-group",
    tools: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    projectlink: "https://qintgroup.com/",
    img: "/images/quint.jpeg",
  },
  {
    id: "03",
    title: "CHOCOLATE POS | RETAIL SYSTEM",
    slug: "chocolate-pos-dashboard",
    tools: ["REACT", "NODE.JS", "TAILWIND"],
    projectlink: "",
    img: "/images/chocolate.jpeg",
  },
  {
    id: "04",
    title: "ABATE AS | CLINICAL EMR",
    slug: "abate-emr-platform",
    tools: ["REACT", "POSTGRESQL", "EXPRESS"],
    projectlink: "",
    img: "/images/abate.jpeg",
  },
  {
    id: "05",
    title: "SWA DIAMONDS | E-COMMERCE",
    slug: "swa-diamonds",
    tools: ["NEXT.JS", "REACT", "AWS"],
    projectlink: "",
    img: "/images/swa.png",
  },
  {
    id: "06",
    title: "VELOTA | ANALYTICS PORTAL",
    slug: "velota",
    tools: ["NEXT.JS", "TYPESCRIPT", "GSAP"],
    projectlink: "",
    img: "/images/velota.jpeg",
  },
];

export default function SelectedWorks() {
  const router = useRouter();

  // Show only the first 5 projects on the home page
  const displayedProjects = allProjects.slice(0, 5);

  const rowOneProjects = displayedProjects.slice(0, 2).map((project, idx) => ({
    ...project,
    span: idx === 0 ? "md:col-span-7" : "md:col-span-5",
  }));

  const rowTwoProjects = displayedProjects.slice(2, 5).map((project) => ({
    ...project,
    span: "md:col-span-4",
  }));

  const showExploreButton = allProjects.length > 5;

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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none whitespace-nowrap">
              CASE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">STUDIES</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xs md:text-right font-mono leading-relaxed">
            bespoke digital solutions for brands that value design and performance.
          </p>
        </div>

        {/* Row 1: Big Left (col-7), Small Right (col-5) */}
        {rowOneProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {rowOneProjects.map((project, idx) => (
              <GsapFade
                key={project.id}
                direction="up"
                distance={40}
                duration={0.7}
                delay={idx * 0.1}
                className={`${project.span} group flex flex-col w-full`}
              >
                {/* Image Card - Navigates to internal Case Study detail */}
                <div
                  onClick={() => router.push(`/case-studies/${project.slug}`)}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 mb-4 shadow-2xl group-hover:border-white/30 transition-all duration-500 cursor-pointer"
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

                {/* Title & Live Site Row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    onClick={() => router.push(`/case-studies/${project.slug}`)}
                    className="cursor-pointer flex-grow"
                  >
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/40 uppercase mt-1">
                      {project.tools.join(" • ")}
                    </p>
                  </div>

                  {/* Highlighted Project Live Link - Navigates in new tab (Shown only if projectlink exists) */}
                  {!!project.projectlink && (
                    <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-all bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 px-3 py-1.5 rounded-full shrink-0"
                    >
                      <span>LIVE SITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </GsapFade>
            ))}
          </div>
        )}

        {/* Row 2: Small Left (col-4), Middle (col-4), Right (col-4) */}
        {rowTwoProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {rowTwoProjects.map((project, idx) => (
              <GsapFade
                key={project.id}
                direction="up"
                distance={40}
                duration={0.7}
                delay={idx * 0.1 + 0.1}
                className={`${project.span} group flex flex-col w-full`}
              >
                {/* Image Card - Navigates to internal Case Study detail */}
                <div
                  onClick={() => router.push(`/case-studies/${project.slug}`)}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 mb-4 shadow-2xl group-hover:border-white/30 transition-all duration-500 cursor-pointer"
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

                {/* Title & Live Site Row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    onClick={() => router.push(`/case-studies/${project.slug}`)}
                    className="cursor-pointer flex-grow"
                  >
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/40 uppercase mt-1">
                      {project.tools.join(" • ")}
                    </p>
                  </div>

                  {/* Highlighted Project Live Link - Navigates in new tab (Shown only if projectlink exists) */}
                  {!!project.projectlink && (
                    <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-all bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 px-3 py-1.5 rounded-full shrink-0"
                    >
                      <span>LIVE SITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </GsapFade>
            ))}
          </div>
        )}

        {/* Centered Pill Button - Shown only if total projects > 5 */}
        {showExploreButton && (
          <div className="pt-12 text-center">
            <button
              onClick={() => router.push("/works")}
              className="px-10 py-4 rounded-full border border-white/20 bg-transparent hover:bg-white hover:text-black text-xs font-mono tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              EXPLORE PROJECTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}



