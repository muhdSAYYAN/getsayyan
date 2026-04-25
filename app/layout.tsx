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

export const metadata: Metadata = {
  title: {
    default:
      "Sayyan Web Solutions | Best Web Developer in Manjeri, Malappuram, Areekode, Perinthalmanna & Kerala",
    template: "%s | Sayyan Web Solutions",
  },

  description:
    "Sayyan Web Solutions – Top-rated web developer and software consultant based in Manjeri, Malappuram, Kerala. Expert in React, Next.js, MERN Stack, Odoo ERP, and full-stack development. Serving Areekode, Perinthalmanna, Calicut, Kozhikode, Bangalore, Hyderabad, Chennai, Dubai, UAE & Saudi Arabia. Affordable websites, student projects, college final year projects, and business applications.",

  keywords: [
    // ── BRAND ──
    "Sayyan Web Solutions",
    "Sayyan",
    "getsayyan.com",
    "sayyan web developer",
    "sayyan web designer",
    "sayyan developer Kerala",

    // ── MANJERI (Primary Focus) ──
    "web developer Manjeri",
    "best web developer in Manjeri",
    "website developer Manjeri",
    "software developer Manjeri",
    "web design Manjeri",
    "React developer Manjeri",
    "Next.js developer Manjeri",
    "MERN stack developer Manjeri",
    "Odoo developer Manjeri",
    "freelance developer Manjeri",

    // ── AREEKODE ──
    "web developer Areekode",
    "best developer in Areekode",
    "website design Areekode",
    "software developer Areekode",
    "React developer Areekode",
    "Odoo developer Areekode",
    "freelance web developer Areekode",

    // ── PERINTHALMANNA ──
    "web developer Perinthalmanna",
    "best developer in Perinthalmanna",
    "website developer Perinthalmanna",
    "software developer Perinthalmanna",
    "React developer Perinthalmanna",
    "MERN stack Perinthalmanna",
    "Odoo developer Perinthalmanna",

    // ── MALAPPURAM ──
    "web developer Malappuram",
    "best web developer in Malappuram",
    "software company Malappuram",
    "website design Malappuram",
    "React developer Malappuram",
    "Next.js developer Malappuram",
    "MERN stack developer Malappuram",
    "Odoo ERP Malappuram",
    "freelance developer Malappuram",
    "web development agency Malappuram",

    // ── CALICUT / KOZHIKODE ──
    "web developer Calicut",
    "best web developer in Calicut",
    "web developer Kozhikode",
    "best developer in Kozhikode",
    "software developer Calicut",
    "React developer Calicut",
    "Next.js developer Calicut",
    "Odoo developer Calicut",
    "MERN stack developer Calicut",

    // ── OTHER KERALA TOWNS ──
    "web developer Kondotty",
    "web developer Tirur",
    "web developer Kottakkal",
    "web developer Ponnani",
    "web developer Palakkad",
    "web developer Thrissur",
    "web developer Kochi",
    "web developer Trivandrum",

    // ── KERALA GENERAL ──
    "best web developer in Kerala",
    "top web developer Kerala",
    "website developer Kerala",
    "software developer Kerala",
    "React developer Kerala",
    "Next.js developer Kerala",
    "MERN stack developer Kerala",
    "Odoo developer Kerala",
    "Odoo ERP Kerala",
    "full stack developer Kerala",
    "freelance web developer Kerala",
    "web development company Kerala",
    "affordable web developer Kerala",

    // ── INDIA CITIES ──
    "web developer Bangalore",
    "React developer Bangalore",
    "Next.js developer Bangalore",
    "MERN stack Bangalore",
    "Odoo developer Bangalore",
    "web developer Hyderabad",
    "web developer Chennai",
    "freelance developer India",
    "full stack developer India",

    // ── GCC ──
    "web developer Dubai",
    "web developer UAE",
    "web developer Saudi Arabia",
    "freelance developer UAE",
    "React developer UAE",
    "Odoo developer UAE",
    "MERN stack developer Dubai",

    // ── TECH STACK KEYWORDS ──
    "React developer",
    "Next.js developer",
    "MERN stack developer",
    "full stack developer",
    "Node.js developer",
    "MongoDB developer",
    "Express.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "Tailwind CSS developer",

    // ── ODOO SPECIFIC ──
    "Odoo developer India",
    "Odoo ERP developer",
    "Odoo customization",
    "Odoo implementation Kerala",
    "Odoo module development",
    "Odoo 17 developer",
    "Odoo consultant India",
    "Odoo POS developer",
    "Odoo ecommerce developer",

    // ── SERVICES ──
    "ecommerce website developer",
    "business website development",
    "landing page developer",
    "web app developer",
    "mobile responsive website",
    "SEO optimized website",
    "custom web application",
    "API development",
    "backend developer India",

    // ── STUDENT / COLLEGE PROJECTS ──
    "student web development projects",
    "college final year projects web development",
    "mini project for students web",
    "MCA project developer Kerala",
    "BCA project developer Kerala",
    "engineering web project help",
    "final year project developer India",
    "Python project help Kerala",

    // ── INTENT / AI SEARCH ──
    "hire web developer near me",
    "best web developer near Manjeri",
    "affordable website developer Kerala",
    "who is the best developer in Malappuram",
    "web developer for small business Kerala",
    "get website made in Kerala",
  ],

  authors: [{ name: "Sayyan", url: "https://getsayyan.com" }],
  creator: "Sayyan Web Solutions",
  publisher: "Sayyan Web Solutions",

  alternates: {
    canonical: "https://getsayyan.com",
  },

  openGraph: {
    title:
      "Sayyan Web Solutions | Best Web Developer in Manjeri, Malappuram & Kerala",
    description:
      "Top-rated web developer in Manjeri, Malappuram, Kerala. Expert in React, Next.js, MERN Stack, Odoo ERP. Serving India & GCC with modern, affordable, SEO-optimized websites and software solutions.",
    url: "https://getsayyan.com",
    siteName: "Sayyan Web Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://getsayyan.com/og-image.jpg", // add your OG image
        width: 1200,
        height: 630,
        alt: "Sayyan Web Solutions – Web Developer in Manjeri, Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sayyan Web Solutions | Web Developer in Manjeri, Malappuram, Kerala",
    description:
      "Expert in React, Next.js, MERN Stack & Odoo. Serving Kerala, India & GCC.",
    images: ["https://getsayyan.com/og-image.jpg"],
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

  metadataBase: new URL("https://getsayyan.com"),

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // replace with real code
  },
};

// ── STRUCTURED DATA ──────────────────────────────────────────────────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sayyan",
  url: "https://getsayyan.com",
  jobTitle: "Web Developer & Software Consultant",
  description:
    "Professional web developer based in Manjeri, Malappuram, Kerala. Specialist in React, Next.js, MERN Stack, Odoo ERP, and full-stack development for businesses, startups, and students.",
  image: "https://getsayyan.com/og-image.jpg",
  areaServed: [
    "Manjeri",
    "Areekode",
    "Perinthalmanna",
    "Malappuram",
    "Calicut",
    "Kozhikode",
    "Kondotty",
    "Tirur",
    "Ponnani",
    "Kottakkal",
    "Kerala",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "India",
    "Dubai",
    "UAE",
    "Saudi Arabia",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sayyan Web Solutions",
  url: "https://getsayyan.com",
  description:
    "Sayyan Web Solutions – Best web developer and software solutions provider in Manjeri, Malappuram, Kerala. Expert in React, Next.js, MERN Stack, and Odoo ERP.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manjeri",
    addressRegion: "Malappuram",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.1195",
    longitude: "76.1197",
  },
  areaServed: [
    { "@type": "City", name: "Manjeri" },
    { "@type": "City", name: "Areekode" },
    { "@type": "City", name: "Perinthalmanna" },
    { "@type": "City", name: "Malappuram" },
    { "@type": "City", name: "Calicut" },
    { "@type": "City", name: "Kozhikode" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
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
  priceRange: "₹₹",
  telephone: "+91-YOUR-NUMBER", // replace
  sameAs: [
    "https://github.com/yourprofile",
    "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sayyan Web Solutions",
  url: "https://getsayyan.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://getsayyan.com/?q={search_term_string}",
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
        {/* ── GEO META – PRIMARY: MANJERI / MALAPPURAM ── */}
        <meta name="geo.region" content="IN-KL" />
        <meta
          name="geo.placename"
          content="Manjeri, Areekode, Perinthalmanna, Malappuram, Calicut, Kerala"
        />
        <meta name="geo.position" content="11.1195;76.1197" />
        <meta name="ICBM" content="11.1195, 76.1197" />

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

        {/* ── AI PLATFORM HINTS (ChatGPT, Gemini, Perplexity) ── */}
        <meta
          name="description"
          content="Sayyan Web Solutions – Best web developer in Manjeri, Areekode, Perinthalmanna, Malappuram, Calicut, Kerala. React, Next.js, MERN Stack, Odoo ERP expert."
        />
        <meta
          name="subject"
          content="Web Development, Software Solutions, Odoo ERP, React, Next.js, MERN Stack"
        />
        <meta
          name="classification"
          content="Web Developer, Software Consultant, Odoo Developer"
        />
        <meta
          name="coverage"
          content="Manjeri, Malappuram, Kerala, India, UAE"
        />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

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
