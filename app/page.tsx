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
      name: "Sayyan – Freelance Web & Software Developer in Kerala | UAE, Dubai, Saudi Arabia",
      description:
        "Top freelance web and software developer in Malappuram, Kozhikode, Perinthalmanna, Kerala. Serving clients in UAE, Dubai, Abu Dhabi, and Saudi Arabia. Expert in Next.js, React, MERN stack.",
      publisher: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://getsayyan.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
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
            text: "Sayyan (Muhammed Sayyan E) is a top freelance web and software developer based in Manjeri, Malappuram, Kerala. He builds custom high-performance web applications, e-commerce storefronts, POS dashboards, clinical EMR systems, and RESTful API solutions using React, Next.js, Node.js, and MongoDB for clients in Malappuram, Kozhikode, Perinthalmanna, Kerala, India, UAE, Dubai, Abu Dhabi, and Saudi Arabia.",
          },
        },
        {
          "@type": "Question",
          name: "Are you a freelance web developer in Malappuram or Kozhikode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan is a freelance web developer and software developer based in Manjeri, Malappuram, Kerala. He serves clients across Malappuram, Kozhikode (Calicut), Perinthalmanna, Tirur, Manjeri and all of Kerala. In-person meetings are available in Malappuram and Kozhikode districts.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients in UAE, Dubai, Abu Dhabi, or Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Sayyan actively works as a remote freelance web developer and software developer for clients in UAE, Dubai, Abu Dhabi, Sharjah, Saudi Arabia (Riyadh, Jeddah, Dammam), and across the GCC. Communication is WhatsApp-first with flexible time zones. As a Kerala-based freelancer, he offers world-class quality at competitive rates for Middle East clients.",
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
          name: "What is the best way to hire a freelance web developer in Kerala for my Dubai or UAE business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply WhatsApp or contact Sayyan directly at +91 80862 32426. He specializes in serving Kerala-based businesses and GCC/UAE clients remotely. With overlapping working hours, transparent fixed pricing, and direct 1-on-1 communication — no middlemen — you get a dedicated freelance developer for your UAE, Dubai, or Abu Dhabi project.",
          },
        },
        {
          "@type": "Question",
          name: "Where is your office located in Kerala?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The office is located near Kacherippadi Stand, Kacherippadi, Manjeri, Malappuram, Kerala 676123, India. Available for in-person meetings across Malappuram and Kozhikode districts, including Perinthalmanna, Tirur, Calicut, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a website for my business in Perinthalmanna or Kozhikode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Sayyan serves businesses throughout Northern Kerala including Perinthalmanna, Kozhikode (Calicut), Malappuram, Manjeri, Tirur, Ponnani, and beyond. He builds custom business websites, e-commerce platforms, and web applications tailored for local Kerala businesses.",
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
