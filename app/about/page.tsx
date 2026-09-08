import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "About Sayyan | Freelance Web Developer in Malappuram & Manjeri, Kerala",
  description:
    "Learn about Sayyan (Muhammed Sayyan E) — a front-end focused full-stack developer with 3+ years experience delivering scalable MERN and Next.js platforms across Kerala & GCC.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "about Sayyan developer",
    "freelance developer Malappuram",
    "MERN stack developer Manjeri",
    "React developer portfolio Kerala",
  ],
  alternates: { canonical: "https://getsayyan.com/about" },
  openGraph: {
    title: "About Sayyan | Freelance Web Developer in Malappuram & Manjeri, Kerala",
    description:
      "Learn about Sayyan (Muhammed Sayyan E) — a front-end focused full-stack developer with 3+ years experience delivering scalable MERN and Next.js platforms.",
    url: "https://getsayyan.com/about",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sayyan | Full-Stack Developer",
    description:
      "Meet Sayyan — front-end focused MERN & Next.js specialist based in Malappuram, Kerala.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://getsayyan.com/about" },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://getsayyan.com/about#webpage",
      url: "https://getsayyan.com/about",
      name: "About Sayyan | Freelance Developer",
      mainEntity: {
        "@type": "Person",
        name: "Muhammed Sayyan E",
        alternateName: "Sayyan",
        jobTitle: "Front-End Focused Full-Stack Developer",
        url: "https://getsayyan.com",
        sameAs: [
          "https://github.com/muhdSAYYAN",
          "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
