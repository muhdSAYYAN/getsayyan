import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "SWA Diamonds E-Commerce Case Study — Sayyan | Luxury Storefront",
  description:
    "Case study of SWA Diamonds luxury jewelry e-commerce storefront built with Next.js and Node.js for diamond catalog showcase and customer conversion.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "luxury ecommerce case study",
    "Next.js jewelry store development",
    "diamond brand website development",
    "ecommerce developer Kerala",
  ],
  alternates: { canonical: "https://getsayyan.com/case-studies/swa-diamonds" },
  openGraph: {
    title: "SWA Diamonds E-Commerce Case Study — Sayyan",
    description:
      "Luxury digital storefront and catalog built with Next.js for high-end diamond jewelry.",
    url: "https://getsayyan.com/case-studies/swa-diamonds",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWA Diamonds E-Commerce Case Study — Sayyan",
    description:
      "Luxury jewelry digital storefront and catalog built with Next.js and Node.js.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://getsayyan.com/case-studies" },
        {
          "@type": "ListItem",
          position: 3,
          name: "SWA Diamonds",
          item: "https://getsayyan.com/case-studies/swa-diamonds",
        },
      ],
    },
    {
      "@type": "TechArticle",
      headline: "SWA Diamonds E-Commerce Case Study — Luxury Digital Storefront",
      description:
        "Case study of SWA Diamonds luxury jewelry e-commerce storefront built with Next.js and Node.js.",
      image: "https://getsayyan.com/images/swa-diamonds-ecommerce-nextjs.png",
      author: {
        "@type": "Person",
        name: "Muhammed Sayyan",
        url: "https://getsayyan.com",
      },
      publisher: {
        "@type": "ProfessionalService",
        name: "Sayyan Web Solutions",
        url: "https://getsayyan.com",
      },
    },
  ],
};

export default function SwaDiamondsCaseStudy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-white/80">SWA Diamonds</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          SWA DIAMONDS | E-COMMERCE
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          A luxury digital storefront and catalog built with Next.js for high-end diamond jewelry showcase and online customer acquisition.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Next.js", "React", "Node.js", "Tailwind CSS", "AWS"].map((tool) => (
            <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-mono">
              {tool}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 mb-16">
          <Image
            src="/images/swa-diamonds-ecommerce-nextjs.png"
            alt="SWA Diamonds e-commerce storefront built with Next.js"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="space-y-12 text-neutral-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p>
              SWA Diamonds needed an elegant, fast, and SEO-optimized e-commerce platform to showcase high-value diamond collections with pristine imagery and seamless navigation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Execution</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Next.js Server-Side Rendering (SSR) for instant page loads and maximum search engine visibility.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-1" />
                <span>Responsive high-definition image galleries optimized for mobile shoppers across GCC &amp; India.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Build a Luxury E-Commerce Platform <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
