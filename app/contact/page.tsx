import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Hire Sayyan – Low Budget Freelance Developer in Malappuram, Kerala",
  description:
    "Get in touch with Sayyan – best low budget freelance web developer in Malappuram, Manjeri, Areekode, Kerala. Affordable websites, apps, Odoo ERP, and student projects. Free consultation. Respond within 24 hours.",
  keywords: [
    "hire web developer Malappuram",
    "contact freelance developer Kerala",
    "affordable web developer contact",
    "low budget developer inquiry Kerala",
    "get website made Malappuram",
    "hire React developer Kerala",
    "freelance developer quote Kerala",
    "cheap web developer contact India",
    "student project help Kerala contact",
  ],
  alternates: { canonical: "https://getsayyan.com/contact" },
  openGraph: {
    title: "Contact Sayyan | Hire Low Budget Freelance Developer – Malappuram",
    description:
      "Hire the best affordable freelance web developer in Malappuram, Kerala. Free consultation. Response within 24 hours.",
    url: "https://getsayyan.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
