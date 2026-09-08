import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Works | Portfolio of Sayyan – Freelance Developer in Malappuram, Kerala",
  description:
    "View real projects built by Sayyan – professional freelance web developer in Malappuram, Kerala. Case studies include POS dashboards, EMR healthcare systems, e-commerce stores, and analytics platforms built with React, Next.js, Node.js & more.",
  keywords: [
    "web developer portfolio Malappuram",
    "freelance developer projects Kerala",
    "React project portfolio Kerala",
    "Next.js project showcase India",
    "EMR system developer Kerala",
    "ecommerce developer portfolio",
    "professional web developer work samples",
    "best affordable web developer portfolio India",
  ],
  alternates: { canonical: "https://getsayyan.com/works" },
  openGraph: {
    title: "Works | Portfolio – Sayyan, Freelance Developer in Malappuram",
    description:
      "Real production projects by Sayyan – professional freelance developer in Malappuram, Kerala. POS, EMR, e-commerce, and dashboards.",
    url: "https://getsayyan.com/works",
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Works | Sayyan Portfolio",
    description:
      "Explore production web applications, medical portals, and e-commerce platforms delivered by Sayyan.",
  },
};

const worksSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "Works", item: "https://getsayyan.com/works" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://getsayyan.com/works#webpage",
      url: "https://getsayyan.com/works",
      name: "Works & Production Projects Portfolio",
      description:
        "Comprehensive collection of production web applications, EMR systems, POS platforms, and e-commerce projects built by Sayyan.",
    },
  ],
};

export default function WorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(worksSchema) }}
      />
      <WorksClient />
    </>
  );
}
