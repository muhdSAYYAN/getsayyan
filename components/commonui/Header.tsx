"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useGSAP(
    () => {
      if (container.current) {
        gsap.fromTo(
          container.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.2,
          },
        );
      }
    },
    { scope: container },
  );

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="header"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-32 pb-10"
    >
      <div ref={container} className="flex flex-col items-center max-w-5xl">
        {/* Availability Badge - Now at the top for better flow */}
        {/* <div className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
            Available for new projects
          </span>
        </div> */}

        <p className="text-xs md:text-sm tracking-[0.5em] text-neutral-500 mb-6 uppercase">
          Strategic Digital Design
        </p>

        <h1 className="font-bold leading-[1.1] tracking-tighter">
          <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            We Build Digital
          </span>
          <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Experiences That
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent italic pb-2">
            Convert Visitors to Revenue.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed">
          Stop settling for "just a website." We engineer high-performance
          platforms that capture attention and drive measurable growth.
        </p>

        {/* Glassmorphism Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5">
          {/* Primary Glass Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/20"
          >
            <span className="relative z-10 text-white font-semibold tracking-wide">
              Start Your Project
            </span>
            {/* Glossy shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>

          {/* Secondary Glass Button */}
          <button
            onClick={() => scrollToSection("works")}
            className="px-10 py-4 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm text-neutral-300 font-medium transition-all hover:bg-white/10 hover:text-white"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
