"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Quote, User } from "lucide-react";

const testimonialsData = [
  {
    quote:
      "Working with Sayyan was a game-changer for my college project. He didn’t just build it—he explained everything clearly and helped me understand the logic behind it. The final result was clean, professional, and helped me score top marks.",
    name: "Nisham",
    title: "Computer Science Student",
  },
  {
    quote:
      "Sayyan handled our project with great professionalism and attention to detail. Communication was smooth, deadlines were met, and the final product exceeded our expectations.",
    name: "Nikita",
    title: "",
  },
  {
    quote:
      "Collaborating with Sayyan as a developer was a great experience. His code quality and problem-solving really stand out.",
    name: "Abin Suresh",
    title: "Odoo Developer",
  },
  {
    quote:
      "A dependable teammate who handles challenges calmly and delivers solid solutions every time.",
    name: "Muhammed Anas",
    title: "Software Developer",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax Header Effect
      if (headerRef.current && containerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      }

      // Infinite Scroller (Marquee)
      if (marqueeRef.current) {
        // Calculate total width of the content correctly
        // We know there are children and they overflow.
        // A safe way for react infinite marquee is scrolling by -50% of the entire duplicated container.
        const tween = gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 35,
          ease: "linear",
        });

        // Pause on hover
        marqueeRef.current.addEventListener("mouseenter", () => tween.pause());
        marqueeRef.current.addEventListener("mouseleave", () => tween.play());
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="w-full py-24 text-white px-6 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div ref={headerRef} className="mb-20 text-center opacity-0">
          <p className="text-xs tracking-[0.5em] text-white/30 uppercase mb-4">
            Collaborations
          </p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4">
            TESTI<span className="text-white/20">MONIALS</span>
          </h2>
          <p className="text-white/50 leading-relaxed max-w-lg mx-auto">
            Transparent feedback from partners and clients who trust my
            expertise.
          </p>
        </div>

        {/* Infinite Scroller (Marquee) Container */}
        <div className="relative w-full overflow-hidden border-t border-b border-white/5 py-10">
          <div
            ref={marqueeRef}
            className="flex flex-row items-stretch w-[200%]"
          >
            {/* Duplicating the array ensures an uninterrupted loop */}
            {[...testimonialsData, ...testimonialsData].map(
              (testimonial, index) => (
                // The Glass Panel Card
                <div
                  key={index}
                  className="w-[380px] md:w-[450px] flex-shrink-0 px-6 py-1 flex h-full"
                >
                  <div className="relative w-full h-full p-8 md:p-12 flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 group">
                    {/* Decorative Quote */}
                    <Quote
                      className="w-20 h-20 text-white/10 absolute top-6 right-6 group-hover:text-blue-500/10 transition-colors"
                      strokeWidth={1}
                    />

                    {/* Testimonial Quote */}
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-sm mb-12 relative z-10 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Client Info (Bottom) */}
                    <div className="flex items-center gap-5 pt-8 border-t border-white/5 mt-auto">
                      <div className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-blue-500/20 transition-all flex items-center justify-center bg-white/5">
                        <User className="w-6 h-6 text-white/60" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-white text-base tracking-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/50 tracking-widest uppercase">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
