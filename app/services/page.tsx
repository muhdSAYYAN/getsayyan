import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Web Development Services | React, Next.js & Full-Stack — Sayyan",
  description:
    "High-performance web development, mobile apps, e-commerce platforms, POS systems, and academic mentoring. Serving clients in Kerala, India & the GCC.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "web development services Kerala",
    "freelance web development Malappuram",
    "hire Next.js developer Kerala",
    "React developer Manjeri",
    "ecommerce website development Kerala",
  ],
  alternates: { canonical: "https://getsayyan.com/services" },
  openGraph: {
    title: "Web Development Services | React, Next.js & Full-Stack — Sayyan",
    description:
      "High-performance web development, mobile apps, e-commerce platforms, POS systems, and academic mentoring. Serving clients in Kerala, India & the GCC.",
    url: "https://getsayyan.com/services",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Sayyan",
    description:
      "Custom web applications, e-commerce stores, and software solutions built for growth.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://getsayyan.com/services" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What technologies do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I primarily build full-stack web and mobile applications using React, Next.js, TypeScript, Node.js, Express, MongoDB, and PostgreSQL. I also specialize in REST API integrations and React Native mobile development.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical web application project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simple landing pages or small portals take 1 to 2 weeks. Comprehensive full-stack platforms, POS dashboards, or E-Commerce platforms usually range between 3 to 6 weeks depending on requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer post-launch maintenance and support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I provide ongoing technical maintenance, performance monitoring, server scaling, security updates, and feature additions after launch.",
          },
        },
        {
          "@type": "Question",
          name: "Can you assist computer science students with academic projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. I provide 1-on-1 mentorship, clean code architecture, project setup support, and detailed logic explanations to prepare students for final-year vivas.",
          },
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}
