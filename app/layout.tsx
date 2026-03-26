import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter, mono, nasalization, quentine } from "@/app/font";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/commonui/SmoothScrollProvider";
import { Background } from "@/components/commonui/Background";

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
      "getsayyan.com | Web Developer in Kerala, Bangalore, Hyderabad, Chennai & GCC",
    template: "%s | getsayyan.com",
  },

  description:
    "Sayyan is a professional web developer offering website development in Kerala, Bangalore, Hyderabad, Chennai, UAE, Dubai and Saudi Arabia. متخصص in student projects, college final year projects, business websites, and SEO-optimized applications.",

  keywords: [
    // Branding
    "Sayyan",
    "getsayyan.com",
    "sayyan web designer",
    "Sayyan developer",

    // Kerala
    "best developer in Manjeri",
    "best developer in Malappuram",
    "best developer in Areekode",
    "best developer in Perinthalmanna",
    "best developer in Calicut",
    "best developer in Kozhikode",
    "best developer in Kerala",

    // India Cities
    "web developer Bangalore",
    "best developer in Bangalore",
    "web developer Hyderabad",
    "best developer in Hyderabad",
    "web developer Chennai",
    "best developer in Chennai",

    // GCC
    "web developer Dubai",
    "web developer UAE",
    "web developer Saudi Arabia",
    "freelance developer UAE",

    // Student / College Projects
    "student web development projects",
    "college final year projects web development",
    "mini project for students web",
    "MCA project developer",
    "BCA project developer",
    "engineering web project help",
    "final year project developer India",

    // Services
    "React developer",
    "Next.js developer",
    "full stack developer",
    "ecommerce website developer",

    // Intent
    "hire web developer near me",
    "affordable website developer",
    "freelance web developer India",
  ],

  authors: [{ name: "Sayyan" }],
  creator: "Sayyan",

  openGraph: {
    title:
      "getsayyan.com | Web Developer in Kerala, Bangalore, Hyderabad, Chennai & GCC",
    description:
      "Professional web developer for businesses, startups, and students. Serving India and GCC with modern, fast, SEO-optimized websites.",
    url: "https://getsayyan.com",
    siteName: "getsayyan.com",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://getsayyan.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GEO SEO - INDIA */}
        <meta name="geo.region" content="IN-KL" />
        <meta
          name="geo.placename"
          content="Kerala, Malappuram, Manjeri, Kozhikode"
        />

        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />

        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />

        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />

        {/* GEO SEO - GCC */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />

        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />

        {/* Coordinates (Kerala base) */}
        <meta name="geo.position" content="11.2588;75.7804" />
        <meta name="ICBM" content="11.2588, 75.7804" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayyan",
              url: "https://getsayyan.com",
              jobTitle: "Web Developer",
              areaServed: [
                "Kerala",
                "Malappuram",
                "Manjeri",
                "Kozhikode",
                "Bangalore",
                "Hyderabad",
                "Chennai",
                "Dubai",
                "UAE",
                "Saudi Arabia",
              ],
              knowsAbout: [
                "Web Development",
                "Student Projects",
                "College Final Year Projects",
                "React",
                "Next.js",
                "Full Stack Development",
              ],
              sameAs: [
                "https://github.com/yourprofile",
                "https://in.linkedin.com/in/sayyan-muhammed-bb8105282",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <SmoothScrollProvider>
          <Background />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
