import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Cross-Platform Mobile App Development Services — Sayyan | Kerala",
  description:
    "Cross-platform mobile application development for iOS and Android using React Native and REST API backends. Fast, scalable, and native-feeling.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "mobile app development Kerala",
    "React Native developer Malappuram",
    "iOS and Android app development",
    "hire React Native developer India",
  ],
  alternates: { canonical: "https://getsayyan.com/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development Services — Sayyan",
    description:
      "Cross-platform mobile application development for iOS and Android using React Native and REST API backends.",
    url: "https://getsayyan.com/services/mobile-app-development",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services — Sayyan",
    description:
      "Cross-platform iOS and Android apps built with React Native for startups and enterprises.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://getsayyan.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mobile App Development",
          item: "https://getsayyan.com/services/mobile-app-development",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      serviceType: "React Native Mobile Application Development",
      description:
        "Cross-platform mobile applications for iOS and Android built with React Native, offline synchronization, and seamless backend API integration.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: ["Kerala", "India", "United Arab Emirates", "Saudi Arabia"],
    },
  ],
};

export default function MobileAppServicePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8 font-mono">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/80">Mobile App Development</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          MOBILE APP DEVELOPMENT
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          Cross-platform mobile applications for iOS and Android built with React Native, offline synchronization, and seamless backend API integration.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl space-y-6">
          <h2 className="text-2xl font-bold">Key Technical Features:</h2>
          <ul className="space-y-4 text-neutral-300 text-lg">
            {[
              "Single codebase deployment for iOS & Android reducing time-to-market by 40%",
              "Offline data caching & seamless sync with cloud REST APIs",
              "Push notifications, authentication, and secure payment gateway integrations",
              "Native performance optimization and WCAG accessibility compliance",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Build a Mobile App <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
