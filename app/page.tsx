import Header from "@/components/commonui/Header";
import { Navbar } from "@/components/commonui/Navbar";
import { Suspense } from "react";
import { About } from "@/components/commonui/About";
import ContactSection from "@/components/commonui/ContactSection";
import WorksSection from "@/components/commonui/WorksSection";
import Services from "@/components/commonui/Services";
import Testimonials from "@/components/commonui/Testimonials";
import { Footer } from "@/components/commonui/Footer";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://getsayyan.com/#website",
      url: "https://getsayyan.com",
      name: "Sayyan – Freelance Web Developer in Kerala",
      description:
        "Professional freelance web developer in Malappuram, Manjeri, Kerala specializing in Next.js, React, MERN stack, and custom web applications.",
      publisher: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://getsayyan.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Sayyan and what web development services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayyan (Muhammed Sayyan E) is a professional freelance web developer based in Manjeri, Malappuram, Kerala. He builds custom high-performance web applications, e-commerce storefronts, POS dashboards, clinical EMR systems, and RESTful API solutions using React, Next.js, Node.js, and MongoDB for clients in Kerala, India, and the GCC.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a custom website or web application cost in Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projects are billed on a clear, fixed-fee basis with zero hidden costs. Simple business landing pages start from affordable rates, while comprehensive custom full-stack web applications and platforms are quoted based on specific architecture and feature requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with international clients outside India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sayyan actively collaborates remotely with businesses, startups, and agencies across the GCC (Saudi Arabia, UAE, Dubai, Abu Dhabi, Qatar, Oman) and Europe, ensuring seamless communication and on-time delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Where is your office located in Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our physical office is located near Kacherippadi Stand, Kacherippadi, Manjeri, Malappuram, Kerala 676123, India. Available for in-person meetings across Malappuram and Kozhikode districts.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-transparent text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
