"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, ExternalLink, MessageSquareHeart } from "lucide-react";

const GoogleColorIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
    />
  </svg>
);

const googleReviewsData = [
  {
    quote:
      "Working with Sayyan was a game-changer for my project. He didn't just build it—he explained everything clearly and helped me understand the logic behind it. The final result was clean, professional, and delivered on time.",
    name: "Nisham",
    role: "Computer Science Client",
    rating: 5,
    date: "Google Review",
  },
  {
    quote:
      "Sayyan handled our enterprise project with great professionalism and attention to detail. Communication was smooth, deadlines were strictly met, and the final product exceeded our expectations.",
    name: "Nikita",
    role: "Product Owner",
    rating: 5,
    date: "Google Review",
  },
  {
    quote:
      "Collaborating with Sayyan as a developer was a great experience. His code quality, React architecture, and problem-solving really stand out.",
    name: "Abin Suresh",
    role: "Odoo ERP Developer",
    rating: 5,
    date: "Google Review",
  },
  {
    quote:
      "A dependable developer who handles complex full-stack challenges calmly and delivers solid, production-grade solutions every time.",
    name: "Muhammed Anas",
    role: "Software Developer",
    rating: 5,
    date: "Google Review",
  },
  {
    quote:
      "Exceptional speed and technical execution. Delivered a high-performance web platform that boosted our client engagement significantly.",
    name: "Jasim Park",
    role: "Business Owner",
    rating: 5,
    date: "Google Review",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (marqueeRef.current) {
        const tween = gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 35,
          ease: "linear",
        });

        marqueeRef.current.addEventListener("mouseenter", () => tween.pause());
        marqueeRef.current.addEventListener("mouseleave", () => tween.play());
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="w-full py-24 text-white bg-transparent overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
          <GoogleColorIcon className="w-4 h-4" />
          <span className="text-xs font-mono tracking-widest text-white/80 uppercase font-semibold">
            Google Portfolio Reviews
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none whitespace-nowrap">
          GOOGLE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">REVIEWS</span>
        </h2>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex items-center gap-1 text-slate-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-slate-300 text-slate-300" />
            ))}
          </div>
          <span className="text-sm font-bold text-white font-mono ml-2">5.0 / 5.0</span>
          <span className="text-xs text-neutral-400 font-mono">on Google Portfolio</span>
        </div>

        {/* WRITE A REVIEW BUTTON */}
        <div className="pt-6">
          <a
            href="https://share.google/GM9X3ZXYy0CXARHnG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>Add a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Full Width Marquee Container */}
      <div className="relative w-full overflow-hidden border-t border-b border-white/10 py-12">
        <div
          ref={marqueeRef}
          className="flex flex-row items-stretch w-[200%]"
        >
          {[...googleReviewsData, ...googleReviewsData].map((rev, index) => (
            <div
              key={index}
              className="w-[360px] sm:w-[420px] md:w-[460px] flex-shrink-0 px-4 flex h-full"
            >
              <div className="relative w-full h-full p-8 flex flex-col justify-between bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 group hover:border-white/20 transition-all">
                <div className="space-y-4">
                  {/* Rating Stars & Colored Google Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-slate-300">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-slate-300 text-slate-300" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        {rev.date}
                      </span>
                      <GoogleColorIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Client Info */}
                <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base tracking-tight">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-white/50 font-mono tracking-wider uppercase">
                      {rev.role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <GoogleColorIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
