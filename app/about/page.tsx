import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Sayyan | Low Budget Freelance Web Developer in Malappuram, Kerala",
  description:
    "Meet Sayyan – a top-rated, low budget freelance web developer based in Malappuram, Kerala. 2+ years building web apps, mobile apps, Odoo ERP systems, and e-commerce platforms for businesses and students across Kerala, India, UAE & GCC.",
  keywords: [
    "about Sayyan web developer",
    "freelance web developer Malappuram",
    "best affordable developer Kerala",
    "who is sayyan developer",
    "low budget developer Malappuram",
    "cheap web developer Kerala",
    "React developer Malappuram",
    "MERN stack developer Kerala",
  ],
  alternates: { canonical: "https://getsayyan.com/about" },
  openGraph: {
    title: "About Sayyan | Freelance Web Developer in Malappuram, Kerala",
    description:
      "Low budget freelance web developer in Malappuram, Kerala with 2+ years of production experience. React, Next.js, MERN Stack & Odoo expert.",
    url: "https://getsayyan.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
