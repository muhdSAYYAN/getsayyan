import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Sayyan, Web Developer in Manjeri, Kerala",
  description:
    "Get a quote for web or software development. Office near Kacherippadi Stand, Manjeri, Kerala 676123. WhatsApp +91 80862 32426. Remote for GCC clients.",
  alternates: { canonical: "https://getsayyan.com/contact" },
  openGraph: {
    title: "Contact Sayyan, Web Developer in Manjeri, Kerala",
    description:
      "Get a quote for web or software development. Office near Kacherippadi Stand, Manjeri, Kerala 676123. WhatsApp +91 80862 32426. Remote for GCC clients.",
    url: "https://getsayyan.com/contact",
    siteName: "Sayyan",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sayyan, Web Developer in Manjeri, Kerala",
    description:
      "Get a quote for web or software development. Office near Kacherippadi Stand, Manjeri, Kerala 676123. WhatsApp +91 80862 32426. Remote for GCC clients.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getsayyan.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://getsayyan.com/contact" },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://getsayyan.com/contact#webpage",
      url: "https://getsayyan.com/contact",
      name: "Contact Sayyan",
      description:
        "Contact Sayyan for web development services. Office near Kacherippadi Stand, Manjeri, Malappuram, Kerala 676123.",
      mainEntity: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
