import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "E-Commerce Platform Development Services — Sayyan | Kerala",
  description:
    "Custom high-converting e-commerce storefronts, shopping carts, multi-currency support, and payment gateway integrations built with Next.js and React.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "ecommerce website development Kerala",
    "Next.js ecommerce developer",
    "custom online store development Malappuram",
    "payment gateway integration Kerala",
  ],
  alternates: { canonical: "https://getsayyan.com/services/ecommerce-development" },
  openGraph: {
    title: "E-Commerce Platform Development Services — Sayyan",
    description:
      "Custom high-converting e-commerce storefronts, shopping carts, multi-currency support, and payment gateway integrations.",
    url: "https://getsayyan.com/services/ecommerce-development",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Platform Development Services — Sayyan",
    description:
      "High-speed online shopping experiences built with Next.js, Stripe, and Razorpay.",
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
          name: "E-Commerce Platforms",
          item: "https://getsayyan.com/services/ecommerce-development",
        },
      ],
    },
    {
      "@type": "Service",
      name: "E-Commerce Platform Development",
      serviceType: "E-Commerce Web Development",
      description:
        "Custom online shopping experiences, multi-currency catalogs, streamlined checkout flows, and secure payment integrations built for high conversion.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: ["Kerala", "India", "United Arab Emirates", "Saudi Arabia"],
    },
  ],
};

export default function EcommerceServicePage() {
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
          <span className="text-white/80">E-Commerce Platforms</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          E-COMMERCE PLATFORM DEVELOPMENT
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          Custom online shopping experiences, multi-currency catalogs, streamlined checkout flows, and secure payment integrations built for high conversion.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl space-y-6">
          <h2 className="text-2xl font-bold">What I Build:</h2>
          <ul className="space-y-4 text-neutral-300 text-lg">
            {[
              "High-speed Next.js digital storefronts with instant page transitions",
              "Multi-currency & regional tax calculation integrations",
              "Secure payment gateways (Stripe, Razorpay, WhatsApp checkout)",
              "Real-time inventory management and order fulfillment dashboards",
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
            → Build Your E-Commerce Store <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
