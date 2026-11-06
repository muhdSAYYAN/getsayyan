import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Freelance Web Developer in Saudi Arabia | Riyadh, Jeddah | Sayyan",
  description:
    "Hire a top freelance web developer & software developer for Saudi Arabia — Riyadh, Jeddah, Dammam. Kerala-based remote specialist — React, Next.js, MERN stack. WhatsApp-first. Competitive rates.",
  keywords: [
    "web developer Saudi Arabia",
    "web developer Riyadh",
    "web developer Jeddah",
    "software developer Saudi Arabia",
    "freelance web developer Saudi Arabia",
    "freelance developer Saudi Arabia",
    "hire web developer Saudi Arabia",
    "best web developer Saudi Arabia",
    "React developer Saudi Arabia",
    "Next.js developer Saudi Arabia",
    "MERN developer Saudi Arabia",
    "full stack developer Saudi Arabia",
    "website developer Saudi Arabia",
    "Kerala developer for Saudi Arabia",
    "Indian web developer Saudi Arabia",
    "remote web developer Saudi Arabia",
    "affordable web developer Saudi Arabia",
    "web developer KSA",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-saudi-arabia" },
  openGraph: {
    title: "Hire Freelance Web Developer in Saudi Arabia | Riyadh, Jeddah | Sayyan",
    description:
      "Top freelance web & software developer for Saudi Arabia — Riyadh, Jeddah, Dammam. Kerala-based remote specialist — React, Next.js, MERN. WhatsApp-first. Competitive rates.",
    url: "https://getsayyan.com/web-developer-saudi-arabia",
    siteName: "Sayyan – Freelance Developer Saudi Arabia",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance Web Developer in Saudi Arabia | Riyadh, Jeddah | Sayyan",
    description:
      "Top freelance web & software developer for Saudi Arabia — Riyadh, Jeddah, Dammam. Kerala-based, WhatsApp-first.",
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
          name: "Web Developer Saudi Arabia",
          item: "https://getsayyan.com/web-developer-saudi-arabia",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development for Saudi Arabia",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web developer and software developer for Saudi Arabia — Riyadh, Jeddah, Dammam. Kerala-based remote specialist — React, Next.js, MERN stack development.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "Saudi Arabia",
        "Riyadh",
        "Jeddah",
        "Dammam",
        "Mecca",
        "Medina",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I hire a freelance web developer for my Saudi Arabia business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is a Kerala-based freelance web developer who regularly works with Saudi Arabia clients in Riyadh, Jeddah, and Dammam. With WhatsApp-first communication, transparent fixed-fee pricing, and direct access to the developer — you get world-class web development at competitive rates.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with businesses in Riyadh and Jeddah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sayyan works remotely with businesses across Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, and beyond. He delivers custom web applications, e-commerce platforms, mobile apps, and software with WhatsApp-first communication and fixed-fee pricing.",
          },
        },
      ],
    },
  ],
};

export default function WebDeveloperSaudiArabiaPage() {
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
          <span className="text-white/80">Web Developer Saudi Arabia</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          FREELANCE WEB DEVELOPER FOR{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            SAUDI ARABIA
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-5">
          I work as a <strong className="text-white">freelance web developer and software developer</strong> for businesses in{" "}
          <strong className="text-white">Saudi Arabia — Riyadh, Jeddah, and Dammam</strong> — building custom websites, React & Next.js web apps, e-commerce platforms, and scalable digital solutions remotely from Kerala, India.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          World-class quality. Competitive pricing vs. Saudi agencies. WhatsApp-first communication. Fixed-fee — full upfront quote, no surprises.
        </p>

        {/* Cities */}
        <div className="mb-12 space-y-6">
          {[
            {
              city: "Riyadh",
              desc: "Full-stack web development, enterprise portals, e-commerce platforms, and REST API architectures for Riyadh businesses across retail, healthcare, and enterprise sectors.",
            },
            {
              city: "Jeddah",
              desc: "Custom React & Next.js web applications, digital storefronts, mobile apps, and POS systems for Jeddah businesses.",
            },
            {
              city: "Dammam & Eastern Province",
              desc: "Web development, software solutions, and warehouse management systems for businesses in Dammam, Al Khobar, Dhahran, and the Eastern Province.",
            },
          ].map(({ city, desc }) => (
            <div key={city} className="border-l-2 border-slate-500 pl-6 space-y-2">
              <h2 className="text-xl font-bold text-white">{city}</h2>
              <p className="text-neutral-300 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Saudi Arabia Businesses Hire a Kerala Freelance Developer:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Significant cost savings vs. Saudi web development agencies",
              "WhatsApp-first communication — real-time replies during KSA business hours",
              "Fixed-fee pricing — full quote upfront, no hourly billing surprises",
              "Direct access to the developer — no account managers or agency layers",
              "Proven experience across e-commerce, healthcare, retail, and enterprise projects",
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
          <h2 className="text-2xl font-bold mb-6">Web Development Services for Saudi Arabia</h2>
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
            Need a reliable freelance web developer for your Saudi Arabia project? Let's talk on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              → Start Your Saudi Project <ArrowRight className="w-4 h-4" />
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

