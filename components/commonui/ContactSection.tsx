"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, ArrowUpRight, ChevronDown, Linkedin } from "lucide-react";
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
    <div className="flex flex-col gap-2 border-b border-white/10 pb-2 relative">
      <label className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer py-1 text-lg text-white"
      >
        <span>{value}</span>

        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} className="opacity-40" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] border border-white/10 rounded-xl mt-2 z-50 shadow-2xl">
          <ul>
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-white hover:text-black cursor-pointer text-sm"
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
  const [budget, setBudget] = useState("₹10,000 - ₹20,000");

  // Handle pre-selected service from query parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  const isIndia = countryCode.includes("+91");

  const budgetOptions = isIndia
    ? [
        "₹10,000 - ₹20,000",
        "₹20,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "₹1,00,000+",
      ]
    : ["$150 - $300", "$300 - $600", "$600 - $1200", "$1200+"];

  const handleCountryChange = (val: string) => {
    setCountryCode(val);

    if (val.includes("+91")) {
      setBudget("₹10,000 - ₹20,000");
    } else {
      setBudget("$150 - $300");
    }
  };

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
      <section id="contact" className="relative w-full py-24 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
          {/* LEFT SIDE */}
          <GsapFade
            direction="right"
            distance={50}
            duration={0.8}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.4em] text-white/40 mb-4 uppercase">
              Contact
            </p>

            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8">
              LET&apos;S <span className="text-white/30">TALK</span>
            </h2>
            <p className="text-lg text-white/60 max-w-md mb-12 leading-relaxed">
              Have a project in mind? Let’s collaborate to build something
              exceptional. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${selfData?.email}`} className="flex gap-4 hover:text-white/70 transition-colors">
                <Mail size={20} className="text-white/40" />
                {selfData?.email}
              </a>

              <a href={`tel:${selfData?.phone}`} className="flex gap-4 hover:text-white/70 transition-colors">
                <Phone size={20} className="text-white/40" />
                {selfData?.phone}
              </a>
              <a
                href={`https://in.linkedin.com/in/sayyan-muhammed-bb8105282`}
                className="flex gap-4 hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-white/40" />
                {"Sayyan Muhammed"}
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm font-medium text-white/60 mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                Serving Clients Globally: 🇮🇳 🇦🇪 🇴🇲 🇬🇧
              </p>
              <blockquote className="text-neutral-500 italic text-sm leading-relaxed max-w-sm">
                &quot;Distance is no longer a barrier to digital excellence. I build high-performance solutions for businesses worldwide.&quot;
              </blockquote>
            </div>
          </GsapFade>

          {/* FORM */}
          <GsapFade
            direction="up"
            distance={30}
            duration={0.8}
            className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-transparent border-b border-white/10 pb-2 outline-none"
              />

              <input
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-white/10 pb-2 outline-none"
              />

              <div className="flex gap-3">
                {/* COUNTRY */}
                <div className="w-[40%]">
                  <CustomSelect
                    label="Country Code"
                    name="countryCode"
                    value={countryCode}
                    onChange={handleCountryChange}
                    options={["🇮🇳 +91", "🇺🇸 +1", "🇬🇧 +44", "🇦🇪 +971", "🇦🇺 +61"]}
                  />
                </div>

                {/* PHONE */}
                <div className="w-[60%] flex flex-col gap-2 border-b border-white/10 pb-2">
                  <label className="text-[10px] tracking-widest text-white/40 uppercase">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="00000 00000"
                    required
                    className="bg-transparent outline-none py-1 text-lg"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <CustomSelect
                label="Service"
                name="service"
                value={service}
                onChange={setService}
                options={[
                  "Premium Web Development",
                  "App Development",
                  "Odoo Integration",
                  "E-Commerce Platforms",
                  "Warehouse Management",
                  "Academic Projects",
                  "Other (Custom Solution)",
                ]}
              />

              {/* BUDGET */}
              <CustomSelect
                label="Expected Budget"
                name="budget"
                value={budget}
                onChange={setBudget}
                options={budgetOptions}
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={3}
                placeholder="Tell me about your vision..."
                className="w-full bg-transparent border-b border-white/10 pb-2 outline-none resize-none"
              />

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Inquiry"}
                <ArrowUpRight size={18} />
              </button>
            </form>
          </GsapFade>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-10 text-center max-w-sm">
            <h3 className="text-2xl font-bold mb-4">Message Sent 🚀</h3>

            <p className="text-white/60 mb-6">
              Thank you for contacting me. I will reply soon.
            </p>

            <button
              onClick={() => setPopup(false)}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
