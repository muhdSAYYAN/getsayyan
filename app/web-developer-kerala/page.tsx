import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Best Web Developer in Kerala | Calicut, Kozhikode",
  description:
    "Affordable, custom web development for businesses across Kerala — Calicut, Kozhikode, Malappuram and Manjeri. Fixed-fee pricing, no templates.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/web-developer-kerala" },
  openGraph: {
    title: "Best Web Developer in Kerala | Calicut, Kozhikode",
    description:
      "Affordable, custom web development for businesses across Kerala — Calicut, Kozhikode, Malappuram and Manjeri. Fixed-fee pricing, no templates.",
    url: "https://getsayyan.com/web-developer-kerala",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
};

export default function WebDeveloperKeralaPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Web Developer Kerala</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          WEB DEVELOPER IN <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">KERALA</span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          Based in Kozhikode / Malappuram, I build custom web applications, e-commerce platforms, and scalable digital solutions for businesses in Kerala, across India, and globally.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Local Kerala Developer:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Direct 1-on-1 communication without agency markup or middleman layers",
              "In-person alignment available in Malappuram, Kozhikode, and Kochi",
              "Production-grade code following SOLID principles for maintainability",
              "Proven track record with clinical EMR, luxury retail, and POS web applications",
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
            → Contact Me in Kerala <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
