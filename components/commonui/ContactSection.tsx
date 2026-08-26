"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, ArrowUpRight, ChevronDown, Linkedin, MessageCircle } from "lucide-react";
import { selfData } from "../Constants/SelfData";
import { GsapFade } from "./GsapFade";

interface CustomSelectProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  onChange: (val: string) => void;
}

const CustomSelect = ({
  label,
  options,
  name,
  value,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl px-5 py-4 text-white text-base flex justify-between items-center cursor-pointer transition-all border-0 outline-none"
      >
        <span className="truncate">{value}</span>
        <ChevronDown size={18} className={`text-slate-300 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="absolute top-full left-0 w-full bg-[#141414] border border-white/10 rounded-2xl mt-2 z-50 shadow-2xl max-h-60 overflow-y-auto"
        >
          <ul className="py-2">
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 hover:bg-white/10 cursor-pointer text-sm transition-colors ${value === opt ? "bg-white/10 text-white font-bold" : "text-neutral-300"}`}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}

      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default function ContactSection() {
  const searchParams = useSearchParams();
  const [service, setService] = useState("Premium Web Development");
  const [countryCode, setCountryCode] = useState("🇮🇳 +91");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/xzdjvkkp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      setPopup(true);
    }

    setLoading(false);
  };

  return (
    <>
      <section id="contact" className="relative w-full py-24 text-white bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
          {/* LEFT SIDE */}
          <GsapFade
            direction="right"
            distance={50}
            duration={0.8}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.4em] text-white/40 mb-4 uppercase font-semibold">
              Contact
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              LET&apos;S <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">TALK</span>
            </h2>
            <p className="text-lg text-white/60 max-w-md mb-12 leading-relaxed">
              Have a project in mind? Let’s collaborate to build something
              exceptional. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${selfData?.email}`}
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-slate-300 shrink-0" />
                <span>{selfData?.email}</span>
              </a>

              <a
                href={`https://wa.me/918086232426`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-slate-300 shrink-0" />
                <span>{selfData?.phone}</span>
              </a>

              <a
                href={`https://in.linkedin.com/in/sayyan-muhammed-bb8105282`}
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-slate-300 shrink-0" />
                <span>Sayyan Muhammed</span>
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm font-medium text-white/60 mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                Serving Clients Globally: 🇮🇳 🇦🇪 🇴🇲 🇬🇧
              </p>
              <blockquote className="text-neutral-500 italic text-sm leading-relaxed max-w-sm">
                &quot;Distance is no longer a barrier to digital excellence. I
                build high-performance solutions for businesses worldwide.&quot;
              </blockquote>
            </div>
          </GsapFade>

          {/* FORM */}
          <GsapFade
            direction="up"
            distance={30}
            duration={0.8}
            className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
                  Full Name
                </label>
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-neutral-500 outline-none border-0 transition-all"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-neutral-500 outline-none border-0 transition-all"
                />
              </div>

              {/* COUNTRY & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5">
                  <CustomSelect
                    label="Country Code"
                    name="countryCode"
                    value={countryCode}
                    onChange={setCountryCode}
                    options={["🇮🇳 +91", "🇺🇸 +1", "🇬🇧 +44", "🇦🇪 +971", "🇦🇺 +61", "🇸🇦 +966", "🇴🇲 +968"]}
                  />
                </div>

                <div className="sm:col-span-7 flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="8086232426"
                    required
                    className="w-full bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-neutral-500 outline-none border-0 transition-all"
                  />
                </div>
              </div>

              {/* PROJECT TYPE / SERVICE */}
              <CustomSelect
                label="Project Type"
                name="service"
                value={service}
                onChange={setService}
                options={[
                  "Premium Web Development",
                  "App Development",
                  "E-Commerce Platforms",
                  "Warehouse Management",
                  "Hospital Management System",
                  "Technical Mentorship & Code Review",
                  "Other (Custom Solution)",
                ]}
              />

              {/* ESTIMATED BUDGET - TEXT INPUT */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
                  Estimated Budget
                </label>
                <input
                  name="budget"
                  placeholder="e.g. $1,500 or ₹50,000"
                  className="w-full bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-neutral-500 outline-none border-0 transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Briefly describe what you need built or the problem you're solving..."
                  className="w-full bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-neutral-500 outline-none border-0 transition-all resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 px-6 bg-white hover:bg-neutral-200 text-black font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                {loading ? "Sending..." : "Send Inquiry"}
                <ArrowUpRight size={18} />
              </button>

              {/* WHATSAPP DIRECT ACTION BUTTON */}
              <div className="pt-4 border-t border-white/10 text-center">
                <a
                  href="https://wa.me/918086232426?text=Hi%20Sayyan,%20I'm%20interested%20in%20discussing%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-bold text-sm uppercase tracking-widest transition-all"
                >
                  <MessageCircle size={18} className="text-slate-300" />
                  <span>Direct Message on WhatsApp</span>
                </a>
              </div>
            </form>
          </GsapFade>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-6">
          <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 text-center max-w-sm w-full space-y-4">
            <h3 className="text-2xl font-black text-white">Message Sent 🚀</h3>
            <p className="text-neutral-400 text-sm">
              Thank you for getting in touch. I will reply within 24 hours.
            </p>
            <button
              onClick={() => setPopup(false)}
              className="w-full py-3 bg-white text-black font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
