import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Case Studies | Sayyan — Web Developer, Kerala",
  description:
    "Recent projects delivered for clients in Kerala and the GCC.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/case-studies" },
  openGraph: {
    title: "Case Studies | Sayyan — Web Developer, Kerala",
    description:
      "Recent projects delivered for clients in Kerala and the GCC.",
    url: "https://getsayyan.com/case-studies",
  },
};

const caseStudies = [
  {
    slug: "chocolate-pos-dashboard",
    title: "Chocolate POS Dashboard",
    headline: "Point-of-Sale System for a High-Traffic Retail Shop",
    desc: "A custom point-of-sale dashboard built on React, Node.js, Express, and MongoDB — real-time order entry, stock tracking, and sales analytics.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    img: "/images/chocolate-pos-dashboard-react-nodejs.jpeg",
    alt: "Chocolate POS dashboard built with React and Node.js",
  },
  {
    slug: "abate-emr-platform",
    title: "Abate AS EMR Platform",
    headline: "Electronic Medical Records (EMR) Platform for Clinics",
    desc: "A fully digital Electronic Medical Records (EMR) platform developed to modernize clinic operations, patient charting, and prescription generation.",
    tools: ["React", "Node.js", "PostgreSQL"],
    img: "/images/abate-emr-platform-react-postgresql.jpeg",
    alt: "Abate AS EMR platform built with React and PostgreSQL",
  },
  {
    slug: "swa-diamonds",
    title: "SWA Diamonds",
    headline: "E-Commerce Storefront for Luxury Jewelry",
    desc: "A breathtaking digital storefront and catalog for a luxury diamond jewelry brand built with Next.js and React.",
    tools: ["React", "Next.js", "Node.js"],
    img: "/images/swa-diamonds-ecommerce-nextjs.png",
    alt: "SWA Diamonds e-commerce storefront built with Next.js",
  },
  {
    slug: "velota",
    title: "Velota Dashboard",
    headline: "High-Speed Dashboard & Analytical Platform",
    desc: "A versatile dashboard interface and accompanying static web portal built with Next.js, TypeScript, and GSAP micro-animations.",
    tools: ["Next.js", "TypeScript", "GSAP"],
    img: "/images/velota-dashboard-nextjs-typescript.jpeg",
    alt: "Velota dashboard built with Next.js and TypeScript",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
            Production Systems Shipped
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            CASE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">STUDIES</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Real production web applications, medical platforms, and e-commerce systems delivered for clients across India and the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((item) => (
            <div
              key={item.slug}
              className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-white/5">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-4">
                    {item.headline}
                  </p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-neutral-300 transition-colors"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
