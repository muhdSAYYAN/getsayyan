"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";
import { quentine } from "@/app/font";
import { selfData } from "@/components/Constants/SelfData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Close mobile menu on scroll down (maintaining original functionality)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 translate-y-0 opacity-100`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 border border-white/5 backdrop-blur-md ${
          isScrolled ? "bg-black/60 py-2 shadow-2xl" : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo / Name - Click to go Home */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/");
            }}
            className="flex items-center space-x-3 group"
          >
            <h1
              className={`${quentine.className} text-white text-xl md:text-2xl font-bold hover:opacity-70 transition-opacity`}
            >
              {selfData.devname}
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/about");
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/services");
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/works");
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? (
              <RiCloseLargeFill size={24} />
            ) : (
              <RiMenu4Fill size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 pb-6 border-t border-white/10 pt-6">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/services");
              }}
              className="text-left text-lg font-medium text-white/80"
            >
              Services
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/about");
              }}
              className="text-left text-lg font-medium text-white/80"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/works");
              }}
              className="text-left text-lg font-medium text-white/80"
            >
              Case Studies
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
              }}
              className="text-left text-lg font-medium text-white/80"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
