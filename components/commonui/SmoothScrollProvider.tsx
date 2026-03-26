"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({
  children,
}: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure the page starts at the top on refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {/* @ts-expect-error - ReactLenis types mismatch with React 19 node definition */}
      {children}
    </ReactLenis>
  );
}
