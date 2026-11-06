import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Freelance Web Developer in Dubai | Software Developer Dubai | Sayyan",
  description:
    "Hire a top freelance web developer & software developer for Dubai, UAE. Kerala-based remote specialist — React, Next.js, MERN stack. WhatsApp-first. Competitive rates vs Dubai agencies.",
  keywords: [
    "web developer Dubai",
    "web developer in Dubai",
    "software developer Dubai",
    "freelance web developer Dubai",
    "freelance developer Dubai",
    "freelance software developer Dubai",
    "hire web developer Dubai",
    "hire freelance developer Dubai",
    "best web developer Dubai",
    "affordable web developer Dubai",
    "React developer Dubai",
    "Next.js developer Dubai",
    "MERN developer Dubai",
    "full stack developer Dubai",
    "website developer Dubai",
    "web development company Dubai",
    "Kerala developer for Dubai",
    "remote web developer Dubai",
    "Indian web developer Dubai",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-dubai" },
  openGraph: {
    title: "Hire Freelance Web Developer in Dubai | React & Next.js Expert | Sayyan",
    description:
      "Top freelance web & software developer for Dubai, UAE. Kerala-based remote specialist — React, Next.js, MERN. WhatsApp-first. Competitive rates vs Dubai agencies.",
    url: "https://getsayyan.com/web-developer-dubai",
    siteName: "Sayyan – Freelance Developer Dubai",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance Web Developer in Dubai | Sayyan",
    description:
      "Top freelance web & software developer for Dubai, UAE. Kerala-based, WhatsApp-first, competitive rates.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Web Developer Dubai",
          item: "https://getsayyan.com/web-developer-dubai",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development for Dubai, UAE",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer for Dubai, UAE. Kerala-based remote specialist — React, Next.js, MERN stack development. WhatsApp-first communication.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "Dubai",
        "United Arab Emirates",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I hire a freelance web developer for my Dubai business from Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is a Kerala-based freelance web developer who regularly works with Dubai and UAE clients remotely. With overlapping working hours, WhatsApp-first communication, and transparent fixed-fee pricing — you get world-class web development at a fraction of Dubai agency costs.",
          },
        },
        {
          "@type": "Question",
          name: "Why hire a Kerala developer for a Dubai project instead of a local Dubai agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kerala-based developers offer the same quality as Dubai agencies at significantly lower cost. Sayyan is a Malayali developer familiar with both Indian and GCC business culture, communicates via WhatsApp in real time, and delivers fixed-fee projects with no hidden costs.",
          },
        },
      ],
    },
  ],
};

export default function WebDeveloperDubaiPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Web Developer Dubai</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          FREELANCE WEB DEVELOPER FOR{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            DUBAI
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          I work as a <strong className="text-white">freelance web developer and software developer</strong> for businesses in{" "}
          <strong className="text-white">Dubai, UAE</strong> — building custom websites, React & Next.js web apps, e-commerce platforms, and scalable digital solutions remotely from Kerala, India.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          World-class quality. Competitive pricing vs. Dubai agencies. WhatsApp-first communication with time zone overlap. Fixed-fee — no hourly surprises.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Dubai Businesses Hire a Kerala Freelance Developer:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Significant cost savings vs. hiring a Dubai web development agency",
              "WhatsApp-first communication with real-time replies during GCC business hours",
              "Fixed-fee pricing — full quote upfront, zero hidden costs",
              "Direct access to the developer building your product — no account managers",
              "Malayali developer — deeply familiar with Dubai & Kerala business culture",
              "Post-launch support, maintenance, and feature additions",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Web Development Services for Dubai Businesses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {[
              "Custom Business Websites",
              "E-Commerce Platforms",
              "React & Next.js Web Apps",
              "MERN Stack Applications",
              "Mobile App Development",
              "POS & Retail Dashboards",
              "REST API Development",
              "Corporate Portals & Intranets",
              "Warehouse Management Systems",
              "Hospital / EMR Software",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-neutral-400 mb-6 text-sm">
            Need a reliable freelance web developer for your Dubai project? Let's talk on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Start Your Dubai Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hire-web-developer-gcc"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 font-mono text-xs uppercase tracking-widest rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              All GCC Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

