"use client";

import Header from "@/components/commonui/Header";
import { Navbar } from "@/components/commonui/Navbar";
import { PreLoader } from "@/components/commonui/PreLoader";

import { useEffect, useState, useRef, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { About } from "@/components/commonui/About";
import FaqAccordion from "@/components/commonui/FaqAccordion";
import ContactSection from "@/components/commonui/ContactSection";
import WorksSection from "@/components/commonui/WorksSection";
import Services from "@/components/commonui/Services";
import Testimonials from "@/components/commonui/Testimonials";
import { Footer } from "@/components/commonui/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide preloader completely from DOM after animation completes (3.5s + some buffer)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Wait 4s to ensure preloader exit animation is done
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Main content entrance animation
    if (!loading && mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform", // Clears transform after animation to allow position: fixed children to work properly
        },
      );
    }
  }, [loading]);

  useGSAP(() => {
    // Preloader exit animation (triggered right before loading becomes false)
    if (preloaderRef.current) {
      // Optional: you can add a fade out timeline if needed, but PreLoader handles its own exit
      // This is just a backup fade
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 3.4, // Matches PreLoader internal exit time roughly
      });
    }
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Content */}
      <div
        ref={mainContentRef}
        className="relative z-10 opacity-0" // starts hidden
      >
        <Navbar />
        <main>
          <Header />
          <About />
          <FaqAccordion />
          <WorksSection />
          <Services />
          <Testimonials />
          <Suspense fallback={<div className="py-20 text-center text-white/20">Loading...</div>}>
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>

      {/* Preloader */}
      {loading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <PreLoader />
        </div>
      )}
    </div>
  );
}
