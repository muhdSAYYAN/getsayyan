import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "About Sayyan | Web Developer, Malappuram & Manjeri",
  description:
    "Freelance developer serving Malappuram, Manjeri and across Kerala with affordable, custom-built websites and full-stack MERN systems.",
  keywords: ALL_TARGET_KEYWORDS,
  alternates: { canonical: "https://getsayyan.com/about" },
  openGraph: {
    title: "About Sayyan | Web Developer, Malappuram & Manjeri",
    description:
      "Freelance developer serving Malappuram, Manjeri and across Kerala with affordable, custom-built websites and full-stack MERN systems.",
    url: "https://getsayyan.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
