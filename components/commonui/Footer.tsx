"use client";

import React from "react";
import { selfData } from "@/components/Constants/SelfData";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent border-t border-white/10 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-white/60 text-sm tracking-wide text-center md:text-left">
          &copy; {currentYear} {selfData.name || "Sayyan"}. All rights reserved.
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={`https://github/${selfData.socials_username.github || "sayyan-e"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          
          <a
            href={`https://instagram.com/${selfData.socials_username.instagram || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href={`https://wa.me/${selfData.phone ? selfData.phone.replace(/[^0-9]/g, "") : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href={`mailto:${selfData.email}`}
            className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
