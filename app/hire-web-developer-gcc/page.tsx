import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Hire Freelance Web Developer in UAE, Dubai, Abu Dhabi, Saudi Arabia | Sayyan",
  description:
    "Hire a top freelance web developer & software developer for UAE, Dubai, Abu Dhabi, and Saudi Arabia. Kerala-based remote developer — React, Next.js, MERN stack. WhatsApp-first. Fixed-fee pricing.",
  keywords: [
    "web developer UAE",
    "web developer Dubai",
    "web developer Abu Dhabi",
    "freelance web developer Dubai",
    "freelance web developer UAE",
    "freelance developer Dubai",
    "freelance software developer UAE",
    "hire web developer UAE",
    "hire freelance developer Dubai",
    "hire web developer Abu Dhabi",
    "web developer Saudi Arabia",
    "freelance developer Saudi Arabia",
    "software developer Dubai",
    "software developer UAE",
    "software developer Abu Dhabi",
    "React developer Dubai",
    "Next.js developer UAE",
    "MERN developer Dubai",
    "Kerala developer for UAE",
    "Kerala web developer for Dubai",
    "GCC web developer",
    "remote web developer for UAE",
    "affordable web developer Dubai",
    "best web developer Dubai",
    "best web developer UAE",
  ],
  alternates: { canonical: "https://getsayyan.com/hire-web-developer-gcc" },
  openGraph: {
    title: "Hire Freelance Web Developer in UAE, Dubai, Abu Dhabi & Saudi Arabia | Sayyan",
    description:
      "Top freelance web developer & software developer for UAE, Dubai, Abu Dhabi, Saudi Arabia & GCC. Kerala-based remote specialist — React, Next.js, MERN. WhatsApp-first communication.",
    url: "https://getsayyan.com/hire-web-developer-gcc",
    siteName: "Sayyan – Freelance Developer UAE & GCC",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance Web Developer in UAE, Dubai, Abu Dhabi & Saudi Arabia | Sayyan",
    description:
      "Top freelance web developer for UAE, Dubai, Abu Dhabi & Saudi Arabia. Kerala-based remote specialist — React, Next.js, MERN.",
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
          name: "Hire Developer UAE & GCC",
          item: "https://getsayyan.com/hire-web-developer-gcc",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development for UAE, Dubai, Abu Dhabi & Saudi Arabia",
      serviceType: "Freelance Software Development",
      description:
        "Top freelance web developer for UAE, Dubai, Abu Dhabi, Saudi Arabia, and the GCC. Kerala-based remote full-stack developer — React, Next.js, MERN stack. WhatsApp-first. Fixed-fee pricing.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "United Arab Emirates",
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Saudi Arabia",
        "Riyadh",
        "Jeddah",
        "Dammam",
        "Qatar",
        "Kuwait",
        "Oman",
        "Bahrain",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I hire a freelance web developer from Kerala for my Dubai or UAE business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is a Kerala-based freelance web developer who regularly works with clients in Dubai, UAE, Abu Dhabi, and across the GCC. With overlapping working hours, WhatsApp-first communication, transparent fixed-fee pricing, and no agency middlemen — you get world-class web development at competitive rates.",
          },
        },
        {
          "@type": "Question",
          name: "What web development services do you offer for UAE and Saudi Arabia businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayyan offers custom website development, React & Next.js web applications, e-commerce platforms, mobile apps, POS systems, warehouse management software, and REST API development for businesses in UAE, Dubai, Abu Dhabi, Saudi Arabia, and the wider GCC.",
          },
        },
        {
          "@type": "Question",
          name: "How do you communicate with clients in Dubai or Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Communication is WhatsApp-first with video calls available. There is a 1.5–2 hour time zone overlap between Kerala (IST) and UAE/Saudi (GST/AST), which allows for smooth real-time collaboration during GCC business hours.",
          },
        },
      ],
    },
  ],
};

const regions = [
  {
    title: "Dubai, UAE",
    desc: "Custom Next.js web applications, React dashboards, mobile apps, and digital storefronts for Dubai startups and established enterprises. Affordable freelance rates vs. Dubai agency prices.",
  },
  {
    title: "Abu Dhabi, UAE",
    desc: "Full-stack web and software development for Abu Dhabi businesses — from e-commerce platforms and POS systems to enterprise web portals and REST APIs.",
  },
  {
    title: "Saudi Arabia (KSA)",
    desc: "Full-stack web development, REST API architectures, and e-commerce solutions for retail, healthcare, and enterprise businesses in Riyadh, Jeddah, and Dammam.",
  },
  {
    title: "Qatar, Kuwait, Oman & Bahrain",
    desc: "Tailored web applications, warehouse management dashboards, and clinical digital systems for growing businesses across Doha, Kuwait City, Muscat, and Manama.",
  },
];

export default function HireWebDeveloperGccPage() {
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
          <span className="text-white/80">Hire Developer — UAE & GCC</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          FREELANCE WEB DEVELOPER FOR{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            UAE & DUBAI
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-6">
          I work remotely as a <strong className="text-white">freelance web developer and software developer</strong> for businesses across{" "}
          <strong className="text-white">UAE, Dubai, Abu Dhabi, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain</strong>.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          Based in Kerala, India — I offer world-class React, Next.js & MERN stack development at GCC-competitive rates, with WhatsApp-first communication and direct 1-on-1 access to the developer writing your code.
        </p>

        {/* Why Choose Section */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Kerala-Based Freelance Developer for UAE & Dubai:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Fixed-fee, milestone-based pricing — quoted upfront, no hourly surprises",
              "WhatsApp-first communication with 1.5–2 hr time zone overlap with GCC business hours",
              "Direct delivery — you work directly with the developer writing your code, no account managers",
              "Proven experience across healthcare (EMR), luxury retail (e-commerce), and full-stack MERN platforms",
              "Significant cost savings vs. hiring a Dubai or Abu Dhabi agency — same quality, fraction of the price",
              "Long-term partnership — post-launch support, maintenance, and feature additions available",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Region Highlights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Web Development Services by Region</h2>
          <div className="space-y-6">
            {regions.map(({ title, desc }) => (
              <div key={title} className="border-l-2 border-slate-500 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-neutral-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services for GCC */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Services for UAE, Dubai & Saudi Arabia</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {[
              "Custom Business Websites",
              "E-Commerce Platforms",
              "React & Next.js Web Apps",
              "MERN Stack Applications",
              "Mobile App Development",
              "REST API Development",
              "POS & Retail Dashboards",
              "Warehouse Management Systems",
              "Hospital / EMR Software",
              "Corporate Portals & Intranets",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-neutral-400 mb-6 text-sm">
            Looking for a reliable freelance web developer for your UAE, Dubai, or Saudi Arabia project? Let's talk on WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Start Your UAE / Dubai Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
