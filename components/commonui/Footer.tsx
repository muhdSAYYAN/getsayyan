"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 py-16 px-6 text-neutral-400 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & NAP */}
          <div className="space-y-4">
            <p className="text-white font-bold tracking-wider text-sm uppercase">
              Sayyan
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Freelance web & software developer in Malappuram, Kozhikode, Perinthalmanna, Kerala — serving UAE, Dubai, Abu Dhabi, Saudi Arabia & GCC.
            </p>
            <address className="not-italic text-xs text-neutral-500 space-y-2">
              <a
                href="https://www.google.com/maps/place/Sayyan+%7C+Web+Developer+in+Malappuram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Near Kacherippadi Stand, Kacherippadi, Manjeri, Malappuram, Kerala 676123, India</span>
              </a>
              <a
                href="tel:+918086232426"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+91 80862 32426</span>
              </a>
              <a
                href="mailto:sayyanelayodan@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>sayyanelayodan@gmail.com</span>
              </a>
            </address>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] text-white/60 uppercase font-semibold">
              Services
            </p>
            <nav className="flex flex-col gap-2 text-xs">
              <Link href="/services/web-development" className="hover:text-white transition-colors">
                Web Development
              </Link>
              <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                Mobile App Development
              </Link>
              <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                E-Commerce Development
              </Link>
              <Link href="/services/api-backend-development" className="hover:text-white transition-colors">
                API &amp; Backend
              </Link>
              <Link href="/services/warehouse-management-systems" className="hover:text-white transition-colors">
                Warehouse &amp; POS Systems
              </Link>
              <Link href="/services/hospital-management-system" className="hover:text-white transition-colors">
                Hospital Management
              </Link>
            </nav>
          </div>

          {/* Kerala Locations */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] text-white/60 uppercase font-semibold">
              Kerala
            </p>
            <nav className="flex flex-col gap-2 text-xs">
              <Link href="/web-developer-malappuram" className="hover:text-white transition-colors">
                Web Developer in Malappuram
              </Link>
              <Link href="/web-developer-kozhikode" className="hover:text-white transition-colors">
                Web Developer in Kozhikode
              </Link>
              <Link href="/web-developer-perinthalmanna" className="hover:text-white transition-colors">
                Web Developer in Perinthalmanna
              </Link>
              <Link href="/web-developer-kerala" className="hover:text-white transition-colors">
                Web Developer in Kerala
              </Link>
            </nav>
          </div>

          {/* GCC & Quick Links */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] text-white/60 uppercase font-semibold">
              UAE & GCC
            </p>
            <nav className="flex flex-col gap-2 text-xs">
              <Link href="/web-developer-dubai" className="hover:text-white transition-colors">
                Web Developer in Dubai
              </Link>
              <Link href="/web-developer-uae" className="hover:text-white transition-colors">
                Web Developer in UAE
              </Link>
              <Link href="/web-developer-saudi-arabia" className="hover:text-white transition-colors">
                Web Developer in Saudi Arabia
              </Link>
              <Link href="/hire-web-developer-gcc" className="hover:text-white transition-colors">
                Hire Developer — GCC
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
            &copy; {currentYear} Sayyan Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
