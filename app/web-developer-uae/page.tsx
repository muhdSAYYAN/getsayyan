import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Freelance Web Developer in UAE & Abu Dhabi | Software Developer | Sayyan",
  description:
    "Hire a top freelance web developer & software developer for UAE, Dubai, Abu Dhabi, Sharjah. Kerala-based remote specialist — React, Next.js, MERN stack. WhatsApp-first. Competitive rates.",
  keywords: [
    "web developer UAE",
    "web developer Abu Dhabi",
    "software developer UAE",
    "software developer Abu Dhabi",
    "freelance web developer UAE",
    "freelance developer UAE",
    "freelance developer Abu Dhabi",
    "hire web developer UAE",
    "hire web developer Abu Dhabi",
    "best web developer UAE",
    "React developer UAE",
    "Next.js developer UAE",
    "MERN developer UAE",
    "full stack developer UAE",
    "website developer UAE",
    "web development company UAE",
    "Kerala developer for UAE",
    "Indian web developer UAE",
    "remote web developer UAE",
    "affordable web developer UAE",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-uae" },
  openGraph: {
    title: "Hire Freelance Web Developer in UAE, Abu Dhabi | React & Next.js Expert | Sayyan",
    description:
      "Top freelance web & software developer for UAE, Abu Dhabi, Dubai, Sharjah. Kerala-based remote specialist — React, Next.js, MERN. WhatsApp-first. Competitive rates.",
    url: "https://getsayyan.com/web-developer-uae",
    siteName: "Sayyan – Freelance Developer UAE",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance Web Developer in UAE & Abu Dhabi | Sayyan",
    description:
      "Top freelance web & software developer for UAE, Abu Dhabi, Dubai, Sharjah. Kerala-based, WhatsApp-first.",
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
          name: "Web Developer UAE",
          item: "https://getsayyan.com/web-developer-uae",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development for UAE, Abu Dhabi & Dubai",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer for UAE, Abu Dhabi, Dubai, and Sharjah. Kerala-based remote specialist — React, Next.js, MERN stack development.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "United Arab Emirates",
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
      ],
    },
  ],
};

export default function WebDeveloperUaePage() {
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
          <span className="text-white/80">Web Developer UAE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          FREELANCE WEB DEVELOPER FOR{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            UAE
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          I work as a <strong className="text-white">freelance web developer and software developer</strong> for businesses across{" "}
          <strong className="text-white">UAE — Dubai, Abu Dhabi, and Sharjah</strong> — building custom websites, React & Next.js web apps, e-commerce platforms, and scalable digital solutions remotely from Kerala, India.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          World-class quality. Competitive pricing vs. UAE agencies. WhatsApp-first. Time zone overlap. Fixed-fee — full upfront quote.
        </p>

        {/* Regions */}
        <div className="mb-12 space-y-6">
          {[
            {
              city: "Abu Dhabi",
              desc: "Full-stack web and software development for Abu Dhabi businesses — custom portals, e-commerce, POS systems, REST APIs, and enterprise web applications.",
            },
            {
              city: "Dubai",
              desc: "Custom Next.js web applications, React dashboards, mobile apps, and digital storefronts for Dubai startups and established enterprises.",
            },
            {
              city: "Sharjah & Other Emirates",
              desc: "Web development, mobile apps, and software solutions for businesses across all UAE emirates — Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
            },
          ].map(({ city, desc }) => (
            <div key={city} className="border-l-2 border-slate-500 pl-6 space-y-2">
              <h2 className="text-xl font-bold text-white">{city}</h2>
              <p className="text-neutral-300 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why UAE Businesses Hire a Kerala Freelance Developer:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Significant cost savings vs. UAE web development agencies",
              "WhatsApp-first communication — real-time replies during UAE business hours",
              "Fixed-fee pricing — full quote upfront, no hourly billing surprises",
              "Direct access to the developer building your product",
              "Familiar with UAE & Malayali business culture",
              "Post-launch support, maintenance, and feature additions",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-neutral-400 mb-6 text-sm">
            Need a reliable freelance web developer for your UAE or Abu Dhabi project? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Start Your UAE Project <ArrowRight className="w-4 h-4" />
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

