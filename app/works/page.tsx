"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { GsapFade } from "@/components/commonui/GsapFade";
import { ArrowRight, ExternalLink } from "lucide-react";

const detailedProjects = [
  {
    id: "01",
    title: "CHOCOLATE POS DASHBOARD",
    category: "Retail Tech & Web Application",
    desc: "A comprehensive point-of-sale system and dashboard built specifically for a high-traffic chocolate shop. Features real-time inventory management, sales tracking, staff performance metrics, and seamless checkout integrations to handle complex retail flows.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    img: "/images/chocolate.jpeg",
    link: "#",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: "02",
    title: "ABATE AS",
    category: "Healthcare EMR",
    desc: "A fully digital Electronic Medical Records (EMR) platform developed to modernize clinic operations. Features secure patient data tracking, appointment scheduling engines, billing integration, and specialized modules for doctors to input prescriptions rapidly.",
    tools: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    img: "/images/abate.jpeg",
    link: "#",
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: "03",
    title: "SWA DIAMONDS",
    category: "E-Commerce & High-End Branding",
    desc: "A breathtaking digital storefront and catalog for a luxury diamond jewelry brand. Crafted with meticulous attention to detail to ensure high-resolution imagery loads flawlessly, backed by a powerful CMS for real-time jewelry stock updates.",
    tools: ["React", "Node.js", "AWS S3", "Next.js"],
    img: "/images/swa.png",
    link: "#",
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: "04",
    title: "VELOTA",
    category: "Analytics Dashboard & Static Platform",
    desc: "A versatile dashboard interface and accompanying lightning-fast static website. Engineered for maximum performance to deliver near-instant page load times while providing the client robust internal analytics tools.",
    tools: ["Next.js", "TypeScript", "Prisma", "GSAP"],
    img: "/images/velota.jpeg",
    link: "#",
    color: "from-emerald-500/20 to-transparent",
  },
];

export default function WorksPage() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero Entrance Animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.2, // Let the page transition settle
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen overflow-x-hidden text-white pt-32 pb-24"
    >
      <Navbar />

      <main className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center max-w-4xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase mb-6 inline-block py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            Case Studies
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
            DIGITAL
            <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent italic pb-2">
              CRAFTSMANSHIP
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A curated selection of elaborated projects, representing my ability 
            to solve complex problems through beautiful, highly-functional software architecture.
          </p>
        </div>

        {/* Detailed Projects Stack */}
        <div className="w-full flex flex-col gap-24 md:gap-32 mb-32">
          {detailedProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <GsapFade
                key={project.id}
                direction="up"
                distance={60}
                duration={0.8}
                delay={0.1}
                className="w-full"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-20 items-center justify-between group`}
                >
                  {/* Image Presentation */}
                  <div className="w-full lg:w-1/2 relative">
                    {/* Background glow tailored to project color */}
                    <div
                      className={`absolute -inset-4 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full pointer-events-none -z-10`}
                    />
                    
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a 
                          href={project.link}
                          className="px-6 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-sm tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                        >
                          VIEW PROJECT <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Text Strategy */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-5xl md:text-6xl font-black text-white/5 tracking-tighter w-20">
                        {project.id}
                      </span>
                      <p className="text-sm tracking-[0.2em] text-neutral-400 uppercase font-semibold border-b border-white/10 pb-1 inline-block">
                        {project.category}
                      </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8 leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-neutral-300 leading-relaxed text-lg md:text-xl mb-10 max-w-lg border-l-2 border-white/10 pl-6 py-2">
                      {project.desc}
                    </p>

                    <div>
                      <h4 className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 transition-all cursor-default hover:bg-white/10 hover:text-white"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Only CTA - Desktop users see the hover overlay on image */}
                    <div className="mt-12 lg:hidden">
                       <a 
                          href={project.link}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm tracking-widest font-bold bg-white/5"
                        >
                          EXPLORE <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                  </div>
                </div>
              </GsapFade>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <GsapFade
          direction="up"
          delay={0.2}
          className="w-full mt-16 text-center border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Whether it's an enterprise EMR, an e-commerce platform, or a complex dashboard, let's build it together.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="inline-block px-10 py-4 rounded-full border border-white/20 bg-white text-black font-bold tracking-wide hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Start Your Project
          </button>
        </GsapFade>
      </main>

      <Footer />
    </div>
  );
}
