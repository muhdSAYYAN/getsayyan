// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { inter, mono, nasalization, quentine } from "@/app/font";
// import "./globals.css";
// import { SmoothScrollProvider } from "@/components/commonui/SmoothScrollProvider";
// import { Background } from "@/components/commonui/Background";
// import SocialSidebar from "@/components/commonui/SocialSidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default:
//       "getsayyan.com | Web Developer in Kerala, Bangalore, Hyderabad, Chennai & GCC",
//     template: "%s | getsayyan.com",
//   },

//   description:
//     "Sayyan is a professional web developer offering website development in Kerala, Bangalore, Hyderabad, Chennai, UAE, Dubai and Saudi Arabia. متخصص in student projects, college final year projects, business websites, and SEO-optimized applications.",

//   keywords: [
//     // Branding
//     "Sayyan",
//     "getsayyan.com",
//     "sayyan web designer",
//     "Sayyan developer",

//     // Kerala
//     "best developer in Manjeri",
//     "best developer in Malappuram",
//     "best developer in Areekode",
//     "best developer in Perinthalmanna",
//     "best developer in Calicut",
//     "best developer in Kozhikode",
//     "best developer in Kerala",

//     // India Cities
//     "web developer Bangalore",
//     "best developer in Bangalore",
//     "web developer Hyderabad",
//     "best developer in Hyderabad",
//     "web developer Chennai",
//     "best developer in Chennai",

//     // GCC
//     "web developer Dubai",
//     "web developer UAE",
//     "web developer Saudi Arabia",
//     "freelance developer UAE",

//     // Student / College Projects
//     "student web development projects",
//     "college final year projects web development",
//     "mini project for students web",
//     "MCA project developer",
//     "BCA project developer",
//     "engineering web project help",
//     "final year project developer India",

//     // Services
//     "React developer",
//     "Next.js developer",
//     "full stack developer",
//     "ecommerce website developer",

//     // Intent
//     "hire web developer near me",
//     "affordable website developer",
//     "freelance web developer India",
//   ],

//   authors: [{ name: "Sayyan" }],
//   creator: "Sayyan",

//   openGraph: {
//     title:
//       "getsayyan.com | Web Developer in Kerala, Bangalore, Hyderabad, Chennai & GCC",
//     description:
//       "Professional web developer for businesses, startups, and students. Serving India and GCC with modern, fast, SEO-optimized websites.",
//     url: "https://getsayyan.com",
//     siteName: "getsayyan.com",
//     locale: "en_IN",
//     type: "website",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   metadataBase: new URL("https://getsayyan.com"),
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* GEO SEO - INDIA */}
//         <meta name="geo.region" content="IN-KL" />
//         <meta
//           name="geo.placename"
//           content="Kerala, Malappuram, Manjeri, Kozhikode"
//         />

//         <meta name="geo.region" content="IN-KA" />
//         <meta name="geo.placename" content="Bangalore, Karnataka" />

//         <meta name="geo.region" content="IN-TG" />
//         <meta name="geo.placename" content="Hyderabad, Telangana" />

//         <meta name="geo.region" content="IN-TN" />
//         <meta name="geo.placename" content="Chennai, Tamil Nadu" />

//         {/* GEO SEO - GCC */}
//         <meta name="geo.region" content="AE-DU" />
//         <meta name="geo.placename" content="Dubai, UAE" />

//         <meta name="geo.region" content="SA" />
//         <meta name="geo.placename" content="Saudi Arabia" />

//         {/* Coordinates (Kerala base) */}
//         <meta name="geo.position" content="11.2588;75.7804" />
//         <meta name="ICBM" content="11.2588, 75.7804" />

//         {/* STRUCTURED DATA */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Person",
//               name: "Sayyan",
//               url: "https://getsayyan.com",
//               jobTitle: "Web Developer",
//               areaServed: [
//                 "Kerala",
//                 "Malappuram",
//                 "Manjeri",
//                 "Kozhikode",
//                 "Bangalore",
//                 "Hyderabad",
//                 "Chennai",
//                 "Dubai",
//                 "UAE",
//                 "Saudi Arabia",
//               ],
//               knowsAbout: [
//                 "Web Development",
//                 "Student Projects",
//                 "College Final Year Projects",
//                 "React",
//                 "Next.js",
//                 "Full Stack Development",
//               ],
//               sameAs: [
//                 "https://github.com/yourprofile",
//                 "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
//               ],
//             }),
//           }}
//         />
//       </head>

//       <body
//         className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <SmoothScrollProvider>
//           <Background />
//           <SocialSidebar />
//           {children}
//         </SmoothScrollProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter, mono, nasalization, quentine } from "@/app/font";
import { ALL_TARGET_KEYWORDS } from "@/lib/seo-keywords";
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
const SITE_URL = "https://getsayyan.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PHONE = "+918086232426";
const EMAIL = "sayyanelayodan@gmail.com";
const FOUNDER_NAME = "Muhammed Sayyan";

const PRIMARY_DESCRIPTION =
  "Sayyan is a professional freelance web developer in Malappuram, Manjeri, Areekode, Kerala, offering React, Next.js, MERN Stack & Odoo ERP development for businesses, startups, and students — serving Kerala, India & GCC.";

// ── METADATA ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Sayyan | Freelance Web Developer in Malappuram, Kerala",
    template: "%s | Sayyan",
  },
  description: PRIMARY_DESCRIPTION,
  keywords: ALL_TARGET_KEYWORDS,
  authors: [{ name: "Sayyan", url: SITE_URL }],
  creator: "Sayyan Web Solutions",
  publisher: "Sayyan Web Solutions",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Sayyan | Freelance Web Developer in Malappuram, Kerala",
    description: PRIMARY_DESCRIPTION,
    url: SITE_URL,
    siteName: "Sayyan – Freelance Developer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sayyan – Professional Freelance Web Developer in Malappuram, Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayyan | Freelance Web Developer in Malappuram, Kerala",
    description: PRIMARY_DESCRIPTION,
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

  metadataBase: new URL(SITE_URL),
};

// ── STRUCTURED DATA (single source of truth per entity type) ──────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sayyan",
  alternateName: FOUNDER_NAME,
  url: SITE_URL,
  jobTitle: "Freelance Web Developer & Software Consultant",
  description: PRIMARY_DESCRIPTION,
  image: OG_IMAGE,
  email: EMAIL,
  telephone: PHONE,
  areaServed: [
    "Malappuram",
    "Manjeri",
    "Areekode",
    "Perinthalmanna",
    "Kondotty",
    "Tirur",
    "Kottakkal",
    "Ponnani",
    "Calicut",
    "Kozhikode",
    "Kochi",
    "Kerala",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "India",
    "Dubai",
    "Abu Dhabi",
    "UAE",
    "Riyadh",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Oman",
    "Bahrain",
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "MERN Stack",
    "Node.js",
    "MongoDB",
    "Odoo ERP",
    "Odoo Customization",
    "Full Stack Development",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "Student Projects",
    "College Final Year Projects",
    "E-commerce Development",
    "SEO Optimization",
  ],
  sameAs: [
    "https://github.com/yourprofile",
    "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
  ],
};

// Single authoritative business schema — merged LocalBusiness + ProfessionalService
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Sayyan Web Solutions",
  url: SITE_URL,
  image: OG_IMAGE,
  description: PRIMARY_DESCRIPTION,
  telephone: PHONE,
  email: EMAIL,
  priceRange: "₹₹",
  founder: { "@type": "Person", name: FOUNDER_NAME },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
    postalCode: "676505",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.0510",
    longitude: "76.0711",
  },

  areaServed: [
    { "@type": "City", name: "Malappuram" },
    { "@type": "City", name: "Manjeri" },
    { "@type": "City", name: "Areekode" },
    { "@type": "City", name: "Perinthalmanna" },
    { "@type": "City", name: "Kondotty" },
    { "@type": "City", name: "Tirur" },
    { "@type": "City", name: "Kottakkal" },
    { "@type": "City", name: "Ponnani" },
    { "@type": "City", name: "Calicut" },
    { "@type": "City", name: "Kozhikode" },
    { "@type": "City", name: "Kochi" },
    { "@type": "State", name: "Kerala" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Chennai" },
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "City", name: "Riyadh" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Bahrain" },
  ],

  serviceType: [
    "Web Development",
    "React Development",
    "Next.js Development",
    "MERN Stack Development",
    "Odoo ERP Development",
    "Full Stack Development",
    "E-commerce Development",
    "Student Project Development",
  ],

  sameAs: [
    "https://github.com/muhdSAYYAN",
    "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Sayyan – Freelance Developer",
  url: SITE_URL,
  description: PRIMARY_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── GEO META – PRIMARY: MALAPPURAM ── */}
        <meta name="geo.region" content="IN-KL" />
        <meta
          name="geo.placename"
          content="Malappuram, Manjeri, Areekode, Perinthalmanna, Calicut, Kerala"
        />
        <meta name="geo.position" content="11.0510;76.0711" />
        <meta name="ICBM" content="11.0510, 76.0711" />

        {/* ── GEO META – SECONDARY INDIA ── */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />

        {/* ── GEO META – GCC ── */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />

        {/* ── AI PLATFORM / GEO HINTS (ChatGPT, Gemini, Perplexity) ── */}
        <meta
          name="subject"
          content="Affordable Web Development, Freelance Developer, Odoo ERP, React, Next.js, MERN Stack"
        />
        <meta
          name="classification"
          content="Freelance Web Developer, Software Consultant, Odoo Developer"
        />
        <meta name="coverage" content="Malappuram, Kerala, India, UAE" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* ── STRUCTURED DATA (deduplicated) ── */}
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