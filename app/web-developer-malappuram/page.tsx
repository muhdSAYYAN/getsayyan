import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Web Developer in Malappuram | Software Developer Malappuram | Sayyan",
  description:
    "Top freelance web developer & software developer in Malappuram, Kerala. Custom websites, React & Next.js apps, e-commerce, mobile apps. Serving Manjeri, Tirur, Perinthalmanna, Ponnani. Hire now.",
  keywords: [
    "web developer Malappuram",
    "web developer in Malappuram",
    "software developer Malappuram",
    "freelance web developer Malappuram",
    "freelance developer Malappuram",
    "hire web developer Malappuram",
    "best web developer Malappuram",
    "web development Malappuram",
    "web design Malappuram",
    "React developer Malappuram",
    "Next.js developer Malappuram",
    "MERN developer Malappuram",
    "full stack developer Malappuram",
    "website developer Malappuram",
    "web developer Manjeri",
    "web developer Tirur",
    "web developer Ponnani",
    "web developer Kondotty",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-malappuram" },
  openGraph: {
    title: "Best Freelance Web Developer in Malappuram | Software Developer | Sayyan",
    description:
      "Top freelance web & software developer in Malappuram, Kerala — Manjeri, Tirur, Perinthalmanna, Ponnani. Custom websites, React, Next.js, MERN apps. Fixed-fee pricing.",
    url: "https://getsayyan.com/web-developer-malappuram",
    siteName: "Sayyan – Freelance Developer Malappuram",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance Web Developer in Malappuram | Sayyan",
    description:
      "Top freelance web & software developer in Malappuram, Kerala. Custom websites, React & Next.js apps.",
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
          name: "Web Developer Malappuram",
          item: "https://getsayyan.com/web-developer-malappuram",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development in Malappuram",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer in Malappuram, Kerala. Serving Manjeri, Tirur, Perinthalmanna, Ponnani, Kondotty and all of Malappuram district.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Kacherippadi Stand, Kacherippadi",
          addressLocality: "Manjeri",
          addressRegion: "Kerala",
          addressCountry: "IN",
          postalCode: "676123",
        },
      },
      areaServed: [
        "Malappuram",
        "Manjeri",
        "Perinthalmanna",
        "Tirur",
        "Ponnani",
        "Kondotty",
        "Kerala",
        "India",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best web developer in Malappuram?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayyan (Muhammed Sayyan E) is a top freelance web developer and software developer based in Manjeri, Malappuram, Kerala. He builds custom websites, React & Next.js web applications, e-commerce platforms, and software for businesses across Malappuram — including Manjeri, Tirur, Perinthalmanna, Ponnani, and Kondotty.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer web development services in Manjeri and Tirur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is based in Manjeri and serves businesses across the entire Malappuram district including Tirur, Perinthalmanna, Ponnani, Kondotty, and beyond. In-person meetings available.",
          },
        },
      ],
    },
  ],
};

const services = [
  "Custom Business Websites",
  "E-Commerce Platforms",
  "React & Next.js Web Apps",
  "MERN Stack Development",
  "Mobile App Development",
  "POS & Retail Dashboards",
  "Hospital / EMR Software",
  "Warehouse Management Systems",
  "REST API Development",
  "Academic & Final Year Projects",
];

export default function WebDeveloperMalappuramPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Web Developer Malappuram</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          WEB DEVELOPER IN{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            MALAPPURAM
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          Based in <strong className="text-white">Manjeri, Malappuram</strong> — I am a top freelance{" "}
          <strong className="text-white">web developer and software developer in Malappuram, Kerala</strong>. I build custom websites, React & Next.js web apps, e-commerce platforms, and scalable software for local and international businesses.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          Serving businesses in <strong className="text-white">Malappuram, Manjeri, Perinthalmanna, Tirur, Ponnani, Kondotty</strong> and all of Kerala — with fixed-fee pricing and direct 1-on-1 communication.
        </p>

        {/* Why hire */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Choose the Best Freelance Web Developer in Malappuram:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Local Malappuram-based developer — in-person meetings available across the district",
              "Direct 1-on-1 communication without agency markup or middleman layers",
              "Fixed-fee pricing — full quote upfront, zero hidden costs",
              "Production-grade code: React, Next.js, MERN stack development",
              "Proven projects: EMR systems, e-commerce, POS dashboards, and more",
              "Also serving clients in UAE, Dubai & Saudi Arabia remotely",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Web Development Services in Malappuram</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas served */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-16 backdrop-blur-xl">
          <h2 className="text-xl font-bold mb-4">Areas Served in Malappuram District</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Manjeri · Perinthalmanna · Tirur · Ponnani · Kondotty · Malappuram Town · Tirurrangadi · Tanur · Kuttippuram · Nilambur · Wandoor · Edappal · Valanchery · and all surrounding areas.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-neutral-400 mb-6 text-sm">
            Need a freelance web developer in Malappuram? Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Hire Me in Malappuram <ArrowRight className="w-4 h-4" />
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

