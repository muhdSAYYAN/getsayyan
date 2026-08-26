"use client";

import Header from "@/components/commonui/Header";
import { Navbar } from "@/components/commonui/Navbar";
import { Suspense } from "react";
import { About } from "@/components/commonui/About";
import ContactSection from "@/components/commonui/ContactSection";
import WorksSection from "@/components/commonui/WorksSection";
import Services from "@/components/commonui/Services";
import Testimonials from "@/components/commonui/Testimonials";
import { Footer } from "@/components/commonui/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-transparent text-white">
      <Navbar />
      <main className="flex-grow">
        <Header />
        <About />
        <Services />
        <WorksSection />
        <Testimonials />
        <Suspense fallback={<div className="py-20 text-center text-white/20">Loading contact form...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
