"use client";

import React, { useRef, Suspense } from "react";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { GsapFade } from "@/components/commonui/GsapFade";
import ContactSection from "@/components/commonui/ContactSection";
import {
  FileText,
  Search,
  Calendar,
  ClipboardList,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "You Fill Out the Form",
    desc: "Share your project details and requirements.",
    icon: <FileText className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "I Review Your Needs",
    desc: "Analyze your requirements and prepare a solution.",
    icon: <Search className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "We Schedule a Call",
    desc: "Discuss details and clarify any questions.",
    icon: <Calendar className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Detailed Proposal",
    desc: "Complete project plan with timeline and pricing.",
    icon: <ClipboardList className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "We Start Building!",
    desc: "Turn your vision into reality.",
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
  },
];

export default function ContactPageClient() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className="relative min-h-screen overflow-x-hidden text-white pt-24 pb-24 flex flex-col items-center"
    >
      <Navbar />

      <main className="relative z-10 w-full flex-grow flex flex-col items-center">
        {/* Contact Form */}
        <div className="w-full">
          <Suspense
            fallback={
              <div className="h-[600px] flex items-center justify-center text-white/20">
                Loading form...
              </div>
            }
          >
            <ContactSection />
          </Suspense>
        </div>

        {/* What Happens Next? */}
        <div className="w-full max-w-7xl mx-auto px-6 mt-10 mb-20 border-t border-white/10 pt-24">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Happens Next?
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                A simple and transparent process to turn your ideas into digital
                reality.
              </p>
            </div>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <GsapFade
                key={i}
                direction="up"
                delay={0.1 * i}
                distance={20}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all h-full text-center flex flex-col items-center">
                  <div className="mb-4 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
