import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Vazhayil Natural Case Study — Decentralized Organic Waste Management Platform",
  description:
    "Case study of Vazhayil Natural's eco-tech platform built with Next.js, TypeScript, and Tailwind CSS for biological waste management solutions and product distribution.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/case-studies/vazhayil-natural" },
  openGraph: {
    title: "Vazhayil Natural Case Study — Muhammed Sayyan E",
    description:
      "Biological solutions for decentralised organic waste management built with Next.js and Tailwind CSS.",
    url: "https://getsayyan.com/case-studies/vazhayil-natural",
  },
};

export default function VazhayilNaturalCaseStudy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8 font-mono">
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-white/80">Vazhayil Natural</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          VAZHAYIL NATURAL | ORGANIC WASTE MANAGEMENT
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          A bespoke, ultra-responsive web platform engineered for Vazhayil Natural Private Limited to champion decentralized biological waste management solutions across households, communities, and commercial institutions.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "React", "WhatsApp API Integration"].map((tool) => (
            <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
              {tool}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 mb-16 shadow-2xl">
          <Image
            src="/images/vazhayilnatural.webp"
            alt="Vazhayil Natural organic waste management platform built with Next.js and Tailwind CSS"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="space-y-12 text-neutral-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p>
              Vazhayil Natural Private Limited develops practical, odor-free biological solutions for decentralized organic waste management—helping households, institutions, and farms turn kitchen bio-waste into valuable nutrient-rich compost right where it is generated. The primary objective was to craft a visually stunning, high-converting digital storefront showcasing their flag-ship product, <strong className="text-white">Easy Composter Inoculum</strong>, with interactive process guides and direct purchase routing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Implementation Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <span><strong className="text-white">Eco-Centric UI Design:</strong> Built a rich, nature-inspired modern dark UI with high-contrast emerald highlights, multi-device preview responsiveness (Mobile, Tablet, Desktop), and micro-animations.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <span><strong className="text-white">Interactive Composting Workflow:</strong> Designed step-by-step visual guides illustrating the 6-stage biological decomposition process (Waste segregation, Inoculum addition, Aeration, Microbial action, Curing, &amp; Harvest).</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <span><strong className="text-white">Direct-to-Consumer Order Integration:</strong> Streamlined product ordering through integrated WhatsApp direct checkout buttons for rapid customer inquiry and localized home delivery dispatch.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <span><strong className="text-white">Performance &amp; SEO Optimization:</strong> Engineered on Next.js App Router for sub-second page loads, responsive image delivery via WebP format, and perfect Lighthouse performance scores.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Build an Eco-Tech Web Platform <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
