import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Contact Sayyan | Budget-Friendly Web Developer",
  description:
    "Get a fixed-fee quote — serving Kerala (Malappuram, Manjeri, Calicut, Kozhikode) and the GCC (UAE, Abu Dhabi, Saudi Arabia).",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/contact" },
  openGraph: {
    title: "Contact Sayyan | Budget-Friendly Web Developer",
    description:
      "Get a fixed-fee quote — serving Kerala (Malappuram, Manjeri, Calicut, Kozhikode) and the GCC (UAE, Abu Dhabi, Saudi Arabia).",
    url: "https://getsayyan.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
