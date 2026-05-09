import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Works | Portfolio of Sayyan – Freelance Developer in Malappuram, Kerala",
  description:
    "View real projects built by Sayyan – best low budget freelance web developer in Malappuram, Kerala. Case studies include POS dashboards, EMR healthcare systems, e-commerce stores, and analytics platforms built with React, Next.js, Node.js & more.",
  keywords: [
    "web developer portfolio Malappuram",
    "freelance developer projects Kerala",
    "React project portfolio Kerala",
    "Next.js project showcase India",
    "EMR system developer Kerala",
    "ecommerce developer portfolio",
    "low budget web developer work samples",
    "best affordable web developer portfolio India",
  ],
  alternates: { canonical: "https://getsayyan.com/works" },
  openGraph: {
    title: "Works | Portfolio – Sayyan, Freelance Developer in Malappuram",
    description:
      "Real production projects by Sayyan – low budget freelance developer in Malappuram, Kerala. POS, EMR, e-commerce, and dashboards.",
    url: "https://getsayyan.com/works",
  },
};

export default function WorksPage() {
  return <WorksClient />;
}
