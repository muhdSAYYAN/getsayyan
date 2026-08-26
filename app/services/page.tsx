import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Services | Sayyan — Web & MERN Development",
  description:
    "React, Next.js, e-commerce and full-stack web application development for clients in Kerala and the GCC.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/services" },
  openGraph: {
    title: "Services | Sayyan — Web & MERN Development",
    description:
      "React, Next.js, e-commerce and full-stack web application development for clients in Kerala and the GCC.",
    url: "https://getsayyan.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
