"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollKey = `scroll_pos_${pathname}`;
    const savedY = sessionStorage.getItem(scrollKey);

    if (savedY !== null) {
      const targetY = parseInt(savedY, 10);
      const restoreScroll = () => {
        if (lenis) {
          lenis.scrollTo(targetY, { immediate: true });
        } else {
          window.scrollTo(0, targetY);
        }
      };

      restoreScroll();
      requestAnimationFrame(restoreScroll);
      setTimeout(restoreScroll, 100);
    }

    const handleScroll = () => {
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, lenis]);

  return <>{children}</>;
}

export function SmoothScrollProvider({
  children,
}: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ScrollController>{children}</ScrollController>
    </ReactLenis>
  );
}

