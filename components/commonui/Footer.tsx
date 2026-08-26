"use client";

import React from "react";
import Link from "next/link";
import { selfData } from "@/components/Constants/SelfData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 text-neutral-400 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-white font-bold tracking-wider text-sm uppercase">
            {selfData.name}
          </p>
          <p className="text-xs text-neutral-500">
            {selfData.jobTitle} · {selfData.current_location.city}, {selfData.current_location.state}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-mono">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <p className="text-xs text-neutral-600 text-center md:text-right">
          &copy; {currentYear} {selfData.devname || "Sayyan"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
