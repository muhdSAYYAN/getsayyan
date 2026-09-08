import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Contact & Location | Sayyan - Web Developer in Manjeri, Malappuram",
  description:
    "Visit our office near Kacherippadi Stand, Manjeri, Kerala 676123 or get a fixed-fee quote for modern web & software development. Serving Kerala, India & GCC.",
  keywords: [
    ...ALL_TARGET_KEYWORDS,
    "web developer in Manjeri",
    "web developer near Kacherippadi Stand",
    "Sayyan Web Developer in Malappuram",
    "freelance developer Manjeri Kerala",
    "web design office Manjeri",
  ],
  alternates: { canonical: "https://getsayyan.com/contact" },
  openGraph: {
    title: "Contact & Location | Sayyan - Web Developer in Manjeri, Malappuram",
    description:
      "Visit our office near Kacherippadi Stand, Manjeri, Kerala 676123 or get a fixed-fee quote for modern web & software development. Serving Kerala, India & GCC.",
    url: "https://getsayyan.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://getsayyan.com/contact#webpage",
      url: "https://getsayyan.com/contact",
      name: "Contact & Office Location | Sayyan - Web Developer in Malappuram",
      description:
        "Contact Sayyan for web development services. Visit our office near Kacherippadi Stand, Manjeri, Malappuram, Kerala 676123.",
      mainEntity: {
        "@type": "ProfessionalService",
        "@id": "https://getsayyan.com/#business",
        name: "Sayyan Web Solutions",
        alternateName: "Sayyan | Web Developer in Malappuram",
        telephone: "+918086232426",
        email: "sayyanelayodan@gmail.com",
        hasMap:
          "https://www.google.com/maps/place/Sayyan+%7C+Web+Developer+in+Malappuram/@11.0618617,76.0683917,12z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!3m5!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!8m2!3d11.1104106!4d76.1205454!16s%2Fg%2F11n58h_cz7",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Kacherippadi Stand, Kacherippadi",
          addressLocality: "Manjeri",
          addressRegion: "Kerala",
          postalCode: "676123",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.1104106,
          longitude: 76.1205454,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
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
