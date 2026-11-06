import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter, mono, nasalization, quentine } from "@/app/font";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/commonui/SmoothScrollProvider";
import { Background } from "@/components/commonui/Background";
import SocialSidebar from "@/components/commonui/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── SITE-WIDE CONSTANTS ───────────────────────────────────────────────────
export const SITE_URL = "https://getsayyan.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PHONE = "+918086232426";
export const PHONE_DISPLAY = "+91 80862 32426";
export const EMAIL = "sayyanelayodan@gmail.com";
export const FOUNDER_NAME = "Muhammed Sayyan E";
export const WHATSAPP_URL = "https://wa.me/918086232426";
export const INSTAGRAM_URL = "https://instagram.com/getsayyan";
export const LINKEDIN_URL = "https://in.linkedin.com/in/sayyan-muhammed-bb8105282";
export const GITHUB_URL = "https://github.com/muhdSAYYAN";
export const MAPS_URL =
  "https://www.google.com/maps/place/Sayyan+%7C+Web+Developer+in+Malappuram/@11.0618617,76.0683917,12z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!3m5!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!8m2!3d11.1104106!4d76.1205454!16s%2Fg%2F11n58h_cz7";

// ── METADATA ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Freelance Web & Software Developer in Kerala | Malappuram, Kozhikode, Perinthalmanna | UAE, Dubai, Saudi Arabia | Sayyan",
    template: "%s | Sayyan – Freelance Developer Kerala & GCC",
  },

  description:
    "Freelance web & software developer based in Malappuram, Kerala. Serving clients in Kozhikode, Perinthalmanna, Manjeri, Dubai, Abu Dhabi, UAE & Saudi Arabia. Expert in React, Next.js & MERN stack. Hire a top freelance developer now.",

  keywords: [
    // Kerala locations
    "web developer in Kerala",
    "software developer in Kerala",
    "web developer Malappuram",
    "web developer Kozhikode",
    "web developer Perinthalmanna",
    "web developer Manjeri",
    "web developer Calicut",
    "freelance web developer Kerala",
    "freelance developer Malappuram",
    "freelance developer Kozhikode",
    "freelance developer Perinthalmanna",
    "freelance software developer Kerala",
    "hire web developer Kerala",
    "hire developer Malappuram",
    "best web developer Kerala",
    "web development company Malappuram",
    "web development Kozhikode",
    "Next.js developer Kerala",
    "React developer Kerala",
    "MERN stack developer Kerala",
    "full stack developer Kerala",
    "full stack developer Malappuram",
    // UAE & GCC
    "web developer UAE",
    "web developer Dubai",
    "web developer Abu Dhabi",
    "freelance web developer Dubai",
    "freelance developer UAE",
    "freelance software developer Dubai",
    "hire web developer UAE",
    "hire freelance developer Dubai",
    "web developer Saudi Arabia",
    "freelance developer Saudi Arabia",
    "web development company UAE",
    "React developer Dubai",
    "Next.js developer UAE",
    "software developer Dubai",
    "software developer Abu Dhabi",
    "software developer Saudi Arabia",
    "GCC web developer",
    "remote web developer for UAE",
    "remote developer for Dubai",
    "Kerala developer for GCC",
  ],

  authors: [{ name: "Muhammed Sayyan E", url: SITE_URL }],
  creator: "Sayyan Web Solutions",
  publisher: "Sayyan Web Solutions",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Freelance Web & Software Developer in Kerala, UAE & Saudi Arabia | Sayyan",
    description:
      "Top freelance web & software developer in Malappuram, Kozhikode, Perinthalmanna, Kerala — serving UAE, Dubai, Abu Dhabi & Saudi Arabia. React, Next.js & MERN stack expert.",
    url: SITE_URL,
    siteName: "Sayyan – Freelance Developer Kerala & GCC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sayyan – Freelance Web & Software Developer in Malappuram, Kerala | UAE, Dubai, Saudi Arabia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance Web & Software Developer in Kerala | UAE, Dubai, Saudi Arabia | Sayyan",
    description:
      "Top freelance web & software developer in Malappuram, Kozhikode, Perinthalmanna, Kerala — serving UAE, Dubai, Abu Dhabi & Saudi Arabia. React, Next.js & MERN.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ── STRUCTURED DATA (single source of truth per entity type) ──────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Muhammed Sayyan E",
  alternateName: ["Sayyan", "Sayyan Developer", "Sayyan Web Developer"],
  url: SITE_URL,
  jobTitle: "Freelance Full-Stack Web & Software Developer",
  description:
    "Muhammed Sayyan E is a top freelance web and software developer based in Malappuram, Kerala. He builds high-performance web apps, mobile apps, and custom software for clients in Kozhikode, Perinthalmanna, Manjeri, Dubai, Abu Dhabi, UAE, and Saudi Arabia using React, Next.js, and MERN stack.",
  image: `${SITE_URL}/sayyan-profile-pic.webp`,
  email: EMAIL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Kacherippadi Stand, Kacherippadi",
    addressLocality: "Manjeri",
    addressRegion: "Kerala",
    addressCountry: "IN",
    postalCode: "676123",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "React Native",
    "JavaScript",
    "Tailwind CSS",
    "REST API",
    "Full Stack Development",
    "E-commerce Development",
    "Freelance Web Development",
    "Software Development",
    "MERN Stack",
    "Web Application Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Freelance Web Developer",
    occupationLocation: [
      { "@type": "City", name: "Malappuram" },
      { "@type": "City", name: "Kozhikode" },
      { "@type": "City", name: "Perinthalmanna" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    description:
      "Freelance full-stack web and software developer serving clients in Kerala (Malappuram, Kozhikode, Perinthalmanna), UAE (Dubai, Abu Dhabi), and Saudi Arabia.",
  },
  sameAs: [
    GITHUB_URL,
    LINKEDIN_URL,
    INSTAGRAM_URL,
    MAPS_URL,
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Sayyan Web Solutions",
  alternateName: [
    "Sayyan | Web Developer in Malappuram",
    "Sayyan | Freelance Developer Kerala",
    "Sayyan | Web Developer in Kozhikode",
    "Sayyan | Web Developer for UAE & Dubai",
  ],
  url: SITE_URL,
  image: OG_IMAGE,
  description:
    "Top freelance web & software developer in Malappuram, Kerala. Serving businesses in Kozhikode, Perinthalmanna, Manjeri, Dubai, Abu Dhabi, UAE, and Saudi Arabia. Expert in React, Next.js, MERN stack development.",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "₹₹",
  currenciesAccepted: "INR, AED, SAR, USD",
  founder: { "@type": "Person", "@id": `${SITE_URL}/#person` },

  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Kacherippadi Stand, Kacherippadi",
    addressLocality: "Manjeri",
    addressRegion: "Kerala",
    addressCountry: "IN",
    postalCode: "676123",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.1104106",
    longitude: "76.1205454",
  },

  hasMap: MAPS_URL,

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

  areaServed: [
    { "@type": "AdministrativeArea", name: "Kerala" },
    { "@type": "City", name: "Malappuram" },
    { "@type": "City", name: "Manjeri" },
    { "@type": "City", name: "Kozhikode" },
    { "@type": "City", name: "Calicut" },
    { "@type": "City", name: "Perinthalmanna" },
    { "@type": "City", name: "Tirur" },
    { "@type": "City", name: "Kochi" },
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "City", name: "Riyadh" },
    { "@type": "City", name: "Jeddah" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Bahrain" },
  ],

  serviceType: [
    "Freelance Web Development",
    "Freelance Software Development",
    "Web Development",
    "Mobile App Development",
    "E-commerce Development",
    "API & Backend Development",
    "Warehouse Management Systems",
    "Hospital Management Software",
    "React Development",
    "Next.js Development",
    "MERN Stack Development",
    "Technical Mentorship",
  ],

  sameAs: [
    GITHUB_URL,
    LINKEDIN_URL,
    INSTAGRAM_URL,
    MAPS_URL,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Sayyan",
  url: SITE_URL,
  description:
    "Freelance web & software developer in Manjeri, Kerala serving clients in India, the UAE, Saudi Arabia and the wider GCC.",
  publisher: { "@id": `${SITE_URL}/#business` },
};

// ────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* ── GEO META – PRIMARY: MANJERI, KERALA ── */}
        <meta name="geo.region" content="IN-KL" />
        <meta
          name="geo.placename"
          content="Manjeri, Kerala"
        />
        <meta name="geo.position" content="11.1104106;76.1205454" />
        <meta name="ICBM" content="11.1104106, 76.1205454" />

        {/* ── STRUCTURED DATA ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <SmoothScrollProvider>
          <Background />
          <SocialSidebar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}