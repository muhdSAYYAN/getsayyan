import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Application Development Services — Muhammed Sayyan E",
  description:
    "Custom, scalable, and high-performance web applications built using React.js, Next.js, Node.js, and MongoDB.",
};

export default function WebDevelopmentServicePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/80">Web Application Development</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          WEB APPLICATION DEVELOPMENT
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          End-to-end full-stack web application development built with React, Next.js, Node.js, and modern cloud databases for high availability and performance.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl space-y-6">
          <h2 className="text-2xl font-bold">What Is Included:</h2>
          <ul className="space-y-4 text-neutral-300 text-lg">
            {[
              "Single Page Applications (SPAs) and Server-Side Rendered (SSR) platforms",
              "RESTful API design and database schema architecture",
              "Responsive UI design engineered for 60 FPS performance",
              "Clean, modular, documented code following SOLID principles",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Start Your Web App Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
