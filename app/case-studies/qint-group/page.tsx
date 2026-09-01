import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "QINT Group Case Study — MEP Testing, HVAC & Handover Management Platform",
  description:
    "Case study of QINT Group KSA's engineering platform built with Next.js, TypeScript, and Tailwind CSS for MEP testing, TAB, HVAC commissioning, and handover management across Saudi Arabia.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/case-studies/qint-group" },
  openGraph: {
    title: "QINT Group Case Study — Muhammed Sayyan E",
    description:
      "Precision engineering platform for MEP systems, TAB, acoustic spray, and building handover management in Saudi Arabia.",
    url: "https://getsayyan.com/case-studies/qint-group",
  },
};

export default function QintGroupCaseStudy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8 font-mono">
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-white/80">QINT Group</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          QINT GROUP | MEP TESTING &amp; HANDOVER MANAGEMENT
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          A high-performance engineering web application engineered for QINT Group KSA—presenting precision MEP testing, TAB services, acoustic spray works, movable wall partitions, and whole-building handover management across Saudi Arabia.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "React", "WebGL"].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
                {tool}
              </span>
            ))}
          </div>

          <a
            href="https://qintgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white transition-all bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 px-4 py-2 rounded-full"
          >
            <span>LIVE WEBSITE: qintgroup.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 mb-16 shadow-2xl">
          <Image
            src="/images/quint.jpeg"
            alt="QINT Group MEP Testing and HVAC Commissioning platform"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="space-y-12 text-neutral-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p>
              QINT Group is an independent engineering firm based in Riyadh, Saudi Arabia, specializing in Integrated Contracting, Construction, Testing &amp; Commissioning, TAB (Testing, Adjusting, Balancing), Quality Control, and Handover Management. The goal was to build a sleek, corporate-tech digital presence reflecting Quality with Integrity (&quot;Helping to Handover&quot;) for high-profile KSA infrastructure projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Implementation Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-neutral-300 shrink-0 mt-1" />
                <span><strong className="text-white">Dark Industrial Aesthetic:</strong> Engineered a modern dark interface with subtle glassmorphism, grainy gradient noise overlays, and crisp typography tailored for Saudi Arabia&apos;s leading engineering sector.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-neutral-300 shrink-0 mt-1" />
                <span><strong className="text-white">Interactive Service Portfolios:</strong> Built interactive service showcases featuring Acoustic Spraying, Movable Wall Partitions, Fischer Heavy Duty Support, KALZIP Roofing, and MEP systems.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-neutral-300 shrink-0 mt-1" />
                <span><strong className="text-white">Process &amp; Validation Workflows:</strong> Highlighted a 3-step technical process (Analysis, Execution, Validation) emphasizing precision-led engineering and global compliance standards (ISO, LEED, NEBB, CSA).</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-neutral-300 shrink-0 mt-1" />
                <span><strong className="text-white">Performance &amp; Speed:</strong> Built with Next.js App Router for instant page transitions, optimized asset preloading, and responsive multi-device design.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://qintgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 bg-transparent text-neutral-300 hover:text-white hover:border-white/50 hover:bg-white/5 font-bold uppercase tracking-widest text-xs rounded-full transition-all"
          >
            Visit Live Site qintgroup.com <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Build an Engineering Web App <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
