import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Web Developer in Perinthalmanna | Software Developer | Sayyan",
  description:
    "Top freelance web developer & software developer in Perinthalmanna, Malappuram, Kerala. Custom websites, React & Next.js apps, e-commerce. Hire the best web developer in Perinthalmanna now.",
  keywords: [
    "web developer Perinthalmanna",
    "web developer in Perinthalmanna",
    "software developer Perinthalmanna",
    "freelance web developer Perinthalmanna",
    "freelance developer Perinthalmanna",
    "hire web developer Perinthalmanna",
    "best web developer Perinthalmanna",
    "web development Perinthalmanna",
    "website developer Perinthalmanna",
    "React developer Perinthalmanna",
    "Next.js developer Perinthalmanna",
    "web developer Malappuram interior",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-perinthalmanna" },
  openGraph: {
    title: "Best Freelance Web Developer in Perinthalmanna | Sayyan",
    description:
      "Top freelance web & software developer in Perinthalmanna, Malappuram, Kerala. Custom websites, React, Next.js, MERN apps. Fixed-fee pricing.",
    url: "https://getsayyan.com/web-developer-perinthalmanna",
    siteName: "Sayyan – Freelance Developer Perinthalmanna",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance Web Developer in Perinthalmanna | Sayyan",
    description:
      "Top freelance web & software developer in Perinthalmanna, Malappuram, Kerala.",
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
          name: "Web Developer Perinthalmanna",
          item: "https://getsayyan.com/web-developer-perinthalmanna",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development in Perinthalmanna",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer serving businesses in Perinthalmanna, Malappuram, Kerala. Custom websites, React & Next.js apps, e-commerce, mobile apps.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Manjeri",
          addressRegion: "Kerala",
          addressCountry: "IN",
          postalCode: "676123",
        },
      },
      areaServed: [
        "Perinthalmanna",
        "Malappuram",
        "Kerala",
        "India",
      ],
    },
  ],
};

export default function WebDeveloperPerinthalmmannaPage() {
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
          <span className="text-white/80">Web Developer Perinthalmanna</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          WEB DEVELOPER IN{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            PERINTHALMANNA
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          Serving businesses in <strong className="text-white">Perinthalmanna, Malappuram, Kerala</strong> — I am a freelance{" "}
          <strong className="text-white">web developer and software developer</strong> specializing in custom websites, React & Next.js apps, e-commerce platforms, and scalable digital solutions.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          Based in Manjeri, Malappuram — just minutes from Perinthalmanna — I offer in-person project discussions and world-class web development with fixed-fee pricing and direct 1-on-1 access.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Freelance Web Developer in Perinthalmanna:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Close proximity — in-person meetings available in and around Perinthalmanna",
              "Direct communication — speak to the actual developer, not an account manager",
              "Fixed-fee pricing — full quote upfront, no surprises, no hidden costs",
              "Modern tech stack: React, Next.js, MERN stack development",
              "Proven track record with real businesses across Kerala and the GCC",
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
          <h2 className="text-2xl font-bold mb-6">Web Development Services for Perinthalmanna Businesses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {[
              "Custom Business Websites",
              "E-Commerce Platforms",
              "React & Next.js Web Apps",
              "MERN Stack Development",
              "Mobile App Development",
              "POS & Retail Dashboards",
              "REST API Development",
              "Hospital / EMR Software",
              "Warehouse Management Systems",
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
            Looking for a freelance web developer near Perinthalmanna? Let's talk today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/web-developer-malappuram"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 font-mono text-xs uppercase tracking-widest rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              Malappuram Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

