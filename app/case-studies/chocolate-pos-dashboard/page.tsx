import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chocolate POS Dashboard Case Study — Muhammed Sayyan E",
  description:
    "Case study of Chocolate POS dashboard system built with React, Node.js, Express, and MongoDB for retail checkout and inventory.",
};

export default function ChocolatePosCaseStudy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-white/80">Chocolate POS</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          CHOCOLATE POS DASHBOARD
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          A high-performance point-of-sale system and retail dashboard engineered for rapid checkout processing, real-time inventory updates, and daily sales reporting.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tool) => (
            <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
              {tool}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 mb-16">
          <Image
            src="/images/chocolate-pos-dashboard-react-nodejs.jpeg"
            alt="Chocolate POS dashboard built with React and Node.js"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="space-y-12 text-neutral-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p>
              The client needed a reliable POS platform capable of handling high daily order volumes with near-zero latency, accurate stock deductions, and staff shift accounting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features &amp; Performance Impact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Fast keyboard and touch checkout workflow cutting billing times under 15 seconds per order.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Live MongoDB inventory synchronization preventing out-of-stock billing across store registers.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Interactive daily sales analytics and revenue reporting charts for retail store managers.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Build a Custom POS System <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
