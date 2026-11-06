import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Web Developer in Kozhikode (Calicut) | Software Developer | Sayyan",
  description:
    "Top freelance web developer & software developer in Kozhikode (Calicut), Kerala. Custom websites, React & Next.js apps, e-commerce. Hire the best web developer in Kozhikode now.",
  keywords: [
    "web developer Kozhikode",
    "web developer Calicut",
    "web developer in Kozhikode",
    "software developer Kozhikode",
    "freelance web developer Kozhikode",
    "freelance developer Kozhikode",
    "freelance developer Calicut",
    "hire web developer Kozhikode",
    "best web developer Kozhikode",
    "web development Kozhikode",
    "web design Kozhikode",
    "React developer Kozhikode",
    "Next.js developer Kozhikode",
    "MERN developer Kozhikode",
    "full stack developer Kozhikode",
    "website developer Kozhikode",
    "website developer Calicut",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-kozhikode" },
  openGraph: {
    title: "Best Freelance Web Developer in Kozhikode (Calicut) | Sayyan",
    description:
      "Top freelance web & software developer in Kozhikode (Calicut), Kerala. Custom websites, React, Next.js, MERN apps. Fixed-fee pricing.",
    url: "https://getsayyan.com/web-developer-kozhikode",
    siteName: "Sayyan – Freelance Developer Kozhikode",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance Web Developer in Kozhikode | Sayyan",
    description:
      "Top freelance web & software developer in Kozhikode (Calicut), Kerala. Custom websites, React & Next.js apps.",
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
          name: "Web Developer Kozhikode",
          item: "https://getsayyan.com/web-developer-kozhikode",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development in Kozhikode (Calicut)",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer serving businesses in Kozhikode (Calicut), Kerala. Custom websites, React & Next.js apps, e-commerce, mobile apps.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "Kozhikode",
        "Calicut",
        "Kerala",
        "India",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best web developer in Kozhikode (Calicut)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayyan (Muhammed Sayyan E) is a top freelance web developer and software developer serving Kozhikode (Calicut), Kerala. Based in nearby Malappuram, he offers in-person meetings in Kozhikode and builds custom websites, React & Next.js web applications, and e-commerce platforms for Calicut businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer web development services in Kozhikode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan serves businesses in Kozhikode (Calicut), Kerala. He builds custom business websites, e-commerce platforms, React & Next.js web apps, and software for Kozhikode businesses with in-person meetings available.",
          },
        },
      ],
    },
  ],
};

export default function WebDeveloperKozhicodePage() {
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
          <span className="text-white/80">Web Developer Kozhikode</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          WEB DEVELOPER IN{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            KOZHIKODE
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          Serving businesses in <strong className="text-white">Kozhikode (Calicut), Kerala</strong> — I am a freelance{" "}
          <strong className="text-white">web developer and software developer</strong> specializing in custom websites, React & Next.js web applications, e-commerce platforms, and scalable software.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          Based near Kozhikode in Malappuram district — in-person meetings available in Kozhikode city and surrounding areas. Fixed-fee pricing, no templates, direct developer access.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Freelance Web Developer in Kozhikode:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "In-person meetings available in Kozhikode (Calicut) city",
              "Direct 1-on-1 communication — no agency overhead",
              "Fixed-fee pricing — full upfront quote with no hidden costs",
              "React, Next.js, MERN stack — modern tech for future-proof websites",
              "Proven track record: EMR, e-commerce, retail POS, and enterprise portals",
              "Local Kerala developer also serving UAE, Dubai & Saudi Arabia clients",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Web Development Services in Kozhikode</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {[
              "Custom Business Websites",
              "E-Commerce Platforms",
              "React & Next.js Web Apps",
              "MERN Stack Development",
              "Mobile App Development",
              "POS & Retail Dashboards",
              "REST API Development",
              "Warehouse Management Systems",
              "Hospital / EMR Software",
              "Academic & Final Year Projects",
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
            Looking for a freelance web developer in Kozhikode? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Hire Me in Kozhikode <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/web-developer-kerala"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 font-mono text-xs uppercase tracking-widest rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              All Kerala Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

