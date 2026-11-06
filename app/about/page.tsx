import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Sayyan, Full-Stack Developer in Manjeri, Kerala",
  description:
    "Meet Muhammed Sayyan E, a MERN & Next.js developer with 3+ years' experience, based in Manjeri, Kerala and working with clients across India and the GCC.",
  alternates: { canonical: "https://getsayyan.com/about" },
  openGraph: {
    title: "About Sayyan, Full-Stack Developer in Manjeri, Kerala",
    description:
      "Meet Muhammed Sayyan E, a MERN & Next.js developer with 3+ years' experience, based in Manjeri, Kerala and working with clients across India and the GCC.",
    url: "https://getsayyan.com/about",
    siteName: "Sayyan",
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sayyan, Full-Stack Developer in Manjeri, Kerala",
    description:
      "Meet Muhammed Sayyan E, a MERN & Next.js developer with 3+ years' experience, based in Manjeri, Kerala and working with clients across India and the GCC.",
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
      name: "About Sayyan",
      mainEntity: {
        "@type": "Person",
        "@id": "https://getsayyan.com/#person",
        name: "Muhammed Sayyan E",
        alternateName: "Sayyan",
        jobTitle: "Front-End Focused Full-Stack Developer",
        url: "https://getsayyan.com",
        sameAs: [
          "https://github.com/muhdSAYYAN",
          "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
          "https://instagram.com/getsayyan",
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
