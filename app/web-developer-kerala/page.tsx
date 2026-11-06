import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Freelance Web Developer in Kerala — Malappuram, Kozhikode, Perinthalmanna | Sayyan",
  description:
    "Top freelance web & software developer in Malappuram, Kozhikode, Perinthalmanna, Manjeri, Kerala. Custom websites, React & Next.js apps, e-commerce. Hire the best freelance web developer in Kerala now.",
  keywords: [
    "web developer Kerala",
    "web developer Malappuram",
    "web developer Kozhikode",
    "web developer Perinthalmanna",
    "web developer Manjeri",
    "web developer Calicut",
    "freelance web developer Kerala",
    "freelance developer Malappuram",
    "freelance developer Kozhikode",
    "freelance developer Perinthalmanna",
    "freelance software developer Kerala",
    "hire web developer Kerala",
    "best web developer Kerala",
    "software developer Kerala",
    "software developer Malappuram",
    "React developer Kerala",
    "Next.js developer Kerala",
    "MERN developer Kerala",
    "full stack developer Kerala",
    "web development Malappuram",
    "web development Kozhikode",
    "web development Perinthalmanna",
  ],
  alternates: { canonical: "https://getsayyan.com/web-developer-kerala" },
  openGraph: {
    title: "Best Freelance Web Developer in Kerala | Malappuram, Kozhikode, Perinthalmanna | Sayyan",
    description:
      "Affordable, custom web development for businesses across Kerala — Malappuram, Kozhikode (Calicut), Perinthalmanna, Manjeri. Freelance React & Next.js developer. Fixed-fee pricing, no templates.",
    url: "https://getsayyan.com/web-developer-kerala",
    siteName: "Sayyan – Freelance Developer Kerala",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance Web Developer in Kerala | Malappuram, Kozhikode, Perinthalmanna | Sayyan",
    description:
      "Custom web applications and business websites built for Kerala businesses across Malappuram, Kozhikode, Perinthalmanna and beyond.",
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
          name: "Web Developer Kerala",
          item: "https://getsayyan.com/web-developer-kerala",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Freelance Web Development in Kerala",
      serviceType: "Freelance Web Development",
      description:
        "Top freelance web & software developer in Malappuram, Kozhikode, Perinthalmanna, Manjeri, Kerala. Custom websites, React & Next.js apps, e-commerce. Fixed-fee pricing, no templates.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: [
        "Kerala",
        "Malappuram",
        "Kozhikode",
        "Calicut",
        "Perinthalmanna",
        "Manjeri",
        "Tirur",
        "Ponnani",
        "Kochi",
        "India",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are you a freelance web developer in Malappuram, Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is a top freelance web developer based in Manjeri, Malappuram, Kerala. He serves clients across Malappuram, Kozhikode, Perinthalmanna, Tirur, and all of Kerala. In-person meetings available across Malappuram and Kozhikode districts.",
          },
        },
        {
          "@type": "Question",
          name: "Do you serve businesses in Perinthalmanna and Kozhikode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sayyan serves businesses in Perinthalmanna, Kozhikode (Calicut), Malappuram, Manjeri, Tirur, Ponnani and all surrounding areas in Northern Kerala. He builds custom business websites, e-commerce platforms, and web applications for local businesses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of web development in Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web development costs in Kerala depend on the project scope. Simple business landing pages are very affordable, while full-stack web applications are quoted on a fixed-fee basis. Sayyan provides transparent, upfront pricing with no hidden charges.",
          },
        },
      ],
    },
  ],
};

const locations = [
  {
    city: "Malappuram",
    desc: "Serving the entire Malappuram district — Manjeri, Tirur, Ponnani, Kondotty, and beyond — with custom web apps, business websites, and e-commerce platforms.",
  },
  {
    city: "Kozhikode (Calicut)",
    desc: "Building modern web applications, e-commerce stores, and software solutions for businesses in Kozhikode city and surrounding areas in Calicut district.",
  },
  {
    city: "Perinthalmanna",
    desc: "Custom website and software development for businesses in Perinthalmanna and the broader Malappuram interior region.",
  },
  {
    city: "Kochi & Wider Kerala",
    desc: "Remote and in-person collaboration available for businesses across Kochi, Thrissur, Palakkad, Kannur, and all of Kerala.",
  },
];

export default function WebDeveloperKeralaPage() {
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
          <span className="text-white/80">Web Developer Kerala</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          FREELANCE WEB DEVELOPER IN{" "}
          <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            KERALA
          </span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-6">
          Based in <strong className="text-white">Malappuram, Kerala</strong> — I build custom web applications, e-commerce platforms, and scalable digital solutions for businesses across <strong className="text-white">Malappuram, Kozhikode, Perinthalmanna, Manjeri</strong>, and all of Kerala.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-12">
          As a <strong className="text-white">freelance web developer and software developer in Kerala</strong>, I offer world-class React & Next.js development at competitive local rates — fixed-fee pricing, direct 1-on-1 communication, no agency middlemen.
        </p>

        {/* Why hire section */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Freelance Web Developer in Kerala:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Direct 1-on-1 communication — no agency markup or middleman layers",
              "In-person meetings available in Malappuram, Kozhikode (Calicut), and Perinthalmanna",
              "Production-grade code following SOLID principles for long-term maintainability",
              "Proven track record with clinical EMR, luxury retail, and POS web applications",
              "Fixed-fee pricing — quoted upfront with zero hidden costs",
              "Local Kerala developer with global experience across UAE, Dubai & Saudi Arabia clients",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Web Development Services Across Kerala</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map(({ city, desc }) => (
              <div
                key={city}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white mb-2">{city}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Services for Kerala Businesses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm">
            {[
              "Custom Business Websites",
              "E-Commerce Platforms",
              "React & Next.js Web Apps",
              "MERN Stack Applications",
              "Mobile App Development",
              "POS & Retail Dashboards",
              "Hospital / EMR Software",
              "Warehouse Management Systems",
              "REST API Development",
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
            Looking for a freelance web developer in Malappuram, Kozhikode, or Perinthalmanna? Let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Hire a Web Developer in Kerala <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
