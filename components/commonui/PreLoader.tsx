"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FC, useState, useEffect, useRef } from "react";
import { nasalization, quentine, amber } from "@/app/font";

interface H1ComponentProps {
  name: string;
  y_initialValue: number;
}

const H1_Component: FC<H1ComponentProps> = ({ name, y_initialValue }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: y_initialValue, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      );
    }
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-white/70 text-center text-lg sm:text-xl md:text-3xl lg:text-4xl uppercase tracking-widest hover:text-white transition-colors px-4"
    >
      {name}
    </h1>
  );
};

export const PreLoader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Dash fade in
    if (dashRef.current) {
      gsap.fromTo(
        dashRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 },
      );
    }

    // Entire text container fade out at 3.2s
    if (textContainerRef.current) {
      gsap.to(textContainerRef.current, {
        opacity: 0,
        duration: 1,
        delay: 2.2,
      });
    }

    // Main container fade out at end
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 3.2,
        onComplete: () => setShowPreloader(false),
      });
    }
  }, []);

  if (!showPreloader) return null;

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden w-full h-screen fixed inset-0 z-[100] pointer-events-none"
    >
      <div className="flex items-center justify-center fixed h-full w-full">

        <div
          ref={textContainerRef}
          className="flex flex-col justify-center items-center tracking-widest mx-auto container text-2xl text-slate-400 "
        >
          <H1_Component
            name={"Let’s craft your vision together"}
            y_initialValue={100}
          />
          <span ref={dashRef} className="mx-2 font-bold opacity-0">
            —
          </span>
          <H1_Component
            name={"I’m Sayyan, your digital creator"}
            y_initialValue={-100}
          />
        </div>
      </div>
    </div>
  );
};
