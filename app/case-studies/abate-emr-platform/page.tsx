import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Abate AS EMR Platform Case Study — Muhammed Sayyan E",
  description:
    "Case study of Abate AS clinical Electronic Medical Records (EMR) platform built with React, Node.js, and PostgreSQL for clinical operations.",
};

export default function AbateEmrCaseStudy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-white/80">Abate AS</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          ABATE AS | CLINICAL EMR PLATFORM
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          A fully digital Electronic Medical Records (EMR) platform developed to modernize clinical operations, patient scheduling, and medical records management.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["React", "Node.js", "PostgreSQL", "Express", "REST APIs"].map((tool) => (
            <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
              {tool}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 mb-16">
          <Image
            src="/images/abate-emr-platform-react-postgresql.jpeg"
            alt="Abate AS EMR platform built with React and PostgreSQL"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="space-y-12 text-neutral-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p>
              Abate AS required a secure, high-availability EMR system designed to streamline patient registration, clinical documentation, prescription tracking, and appointment management across multiple consultation branches.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features &amp; Technical Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Custom electronic medical records dashboard with role-based access control for doctors and clinical staff.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Integration with Buktor appointment booking engine for seamless patient consultation scheduling.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>PostgreSQL database schema optimized for fast query response and strict patient data security standards.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Build a Similar Health Platform <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
