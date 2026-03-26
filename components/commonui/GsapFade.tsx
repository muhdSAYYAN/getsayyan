"use client";

import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapFadeProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  stagger?: number;
}

export const GsapFade = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.8,
  delay = 0,
  className = "",
}: GsapFadeProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const yOffset =
        direction === "up" ? distance : direction === "down" ? -distance : 0;
      const xOffset =
        direction === "left" ? distance : direction === "right" ? -distance : 0;

      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          y: yOffset,
          x: xOffset,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%", // Trigger when top of element hits 85% of viewport
            toggleActions: "play none none reverse", // Play on scroll down, only reverse when scrolling all the way back up
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};
