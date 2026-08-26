import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Best Web Developer for GCC | UAE, Abu Dhabi",
  description:
    "Remote web development and full-stack MERN services for businesses across the GCC — UAE, Abu Dhabi, Saudi Arabia and beyond.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/hire-web-developer-gcc" },
  openGraph: {
    title: "Best Web Developer for GCC | UAE, Abu Dhabi",
    description:
      "Remote web development and full-stack MERN services for businesses across the GCC — UAE, Abu Dhabi, Saudi Arabia and beyond.",
    url: "https://getsayyan.com/hire-web-developer-gcc",
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
      name: "Hire Developer GCC",
      item: "https://getsayyan.com/hire-web-developer-gcc",
    },
  ],
};

export default function HireWebDeveloperGccPage() {
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
          <span className="text-white/80">Hire Developer GCC</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
          WEB DEVELOPER FOR THE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">GCC</span>
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          I work remotely with businesses across Saudi Arabia, the UAE, Qatar, Kuwait, Oman, and Bahrain, building custom web applications, e-commerce platforms, and scalable digital systems.
        </p>

        {/* Why Choose Section */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Why Work With a Remote Kerala-Based Developer:</h2>
          <ul className="space-y-4 text-neutral-300 text-base md:text-lg">
            {[
              "Fixed-fee, milestone-based pricing — quoted upfront, no hourly surprises",
              "Communication that fits your working hours (2–4 hr overlap typical with GCC business hours)",
              "Direct delivery — no account manager layer, you work directly with the developer writing your code",
              "Proven experience across healthcare (EMR), luxury retail (e-commerce), and full-stack MERN platforms",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Region Highlights */}
        <div className="space-y-12 mb-16">
          <div className="border-l-2 border-slate-500 pl-6 space-y-3">
            <h2 className="text-2xl font-bold text-white">Saudi Arabia (KSA)</h2>
            <p className="text-neutral-300 leading-relaxed">
              Full-stack web development, REST API architectures, and e-commerce solutions tailored for retail, healthcare, and enterprise businesses in Riyadh, Jeddah, and Dammam.
            </p>
          </div>

          <div className="border-l-2 border-slate-500 pl-6 space-y-3">
            <h2 className="text-2xl font-bold text-white">United Arab Emirates (UAE)</h2>
            <p className="text-neutral-300 leading-relaxed">
              Custom Next.js web applications, mobile apps, and digital storefronts built for Dubai, Abu Dhabi, and Sharjah startups and commercial enterprises.
            </p>
          </div>

          <div className="border-l-2 border-slate-500 pl-6 space-y-3">
            <h2 className="text-2xl font-bold text-white">Qatar, Kuwait, Oman &amp; Bahrain</h2>
            <p className="text-neutral-300 leading-relaxed">
              Tailored web applications, warehouse management dashboards, and clinical digital systems designed for growing businesses across Doha, Kuwait City, Muscat, and Manama.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            → Start Your GCC Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
