import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Warehouse Management & POS Systems — Sayyan | Kerala",
  description:
    "Tailored inventory management software, stock dispatch tracking, and custom POS billing systems built with React, Node.js, and SQL/MongoDB.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "POS software developer Kerala",
    "warehouse management software development",
    "custom retail POS system India",
    "inventory management system developer",
  ],
  alternates: { canonical: "https://getsayyan.com/services/warehouse-management-systems" },
  openGraph: {
    title: "Warehouse Management & POS Systems — Sayyan",
    description:
      "Tailored inventory management software, stock dispatch tracking, and custom POS billing systems.",
    url: "https://getsayyan.com/services/warehouse-management-systems",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse & POS Systems — Sayyan",
    description:
      "Custom point-of-sale and warehouse management software for retail and logistics businesses.",
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
          name: "Warehouse & POS Systems",
          item: "https://getsayyan.com/services/warehouse-management-systems",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Warehouse & POS Systems Development",
      serviceType: "Enterprise Software Development",
      description:
        "Tailored inventory management software, real-time stock dispatch engines, barcode integration, and custom point-of-sale billing platforms.",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      areaServed: ["Kerala", "India", "United Arab Emirates", "Saudi Arabia"],
    },
  ],
};

export default function WarehouseManagementServicePage() {
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
          <span className="text-white/80">Warehouse &amp; POS Systems</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          WAREHOUSE &amp; POS SYSTEMS
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          Tailored inventory management software, real-time stock dispatch engines, barcode integration, and custom point-of-sale billing platforms.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl space-y-6">
          <h2 className="text-2xl font-bold">System Capabilities:</h2>
          <ul className="space-y-4 text-neutral-300 text-lg">
            {[
              "Real-time stock level synchronization across multi-location warehouses",
              "Fast point-of-sale (POS) billing interface supporting offline transactions",
              "Barcode scanner and receipt printer hardware integration",
              "Custom reporting dashboards with automated low-stock notifications",
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
            → Build a Custom POS / WMS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
