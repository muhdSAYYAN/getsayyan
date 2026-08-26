import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic & Final-Year CS Projects — Muhammed Sayyan E",
  description:
    "1-on-1 development guidance, code architecture mentorship, and logic explanation for MCA, BCA, B.Tech, and CS students.",
};

export default function AcademicProjectsServicePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/40 uppercase mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/80">Academic Projects</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
          ACADEMIC &amp; FINAL-YEAR PROJECTS
        </h1>

        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          Hands-on mentorship, 1-on-1 code architecture guidance, and full-stack logic explanations designed to help computer science students ace final-year project vivas and practical exams.
        </p>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl space-y-6">
          <h2 className="text-2xl font-bold">Key Benefits for Students:</h2>
          <ul className="space-y-4 text-neutral-300 text-lg">
            {[
              "1-on-1 logic breakdown and code walkthroughs",
              "Production-grade coding standards that impress viva examiners",
              "Full stack architecture guidance (MERN, Next.js, REST APIs)",
              "Complete project setup support on your local machine",
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
            → Get Project Guidance <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
