import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Low Budget Web & App Development in Malappuram, Kerala",
  description:
    "Affordable web development, mobile app, Odoo ERP, e-commerce, hospital management & warehouse systems by Sayyan – best low budget freelance developer in Malappuram, Manjeri, Areekode, Kerala. React, Next.js, MERN Stack expert serving India & GCC.",
  keywords: [
    "web development services Malappuram",
    "affordable web developer services Kerala",
    "low budget website development Kerala",
    "cheap freelance developer Malappuram",
    "best value web developer Kerala",
    "Odoo ERP development Malappuram",
    "React developer services Kerala",
    "Next.js developer Malappuram",
    "app development Malappuram",
    "ecommerce development Kerala",
    "hospital management system Kerala",
    "warehouse management system Kerala",
    "cheap web developer services India",
    "budget freelance developer services",
    "student project developer Malappuram",
  ],
  alternates: { canonical: "https://getsayyan.com/services" },
  openGraph: {
    title: "Services | Affordable Web Development in Malappuram, Kerala",
    description:
      "Web, app, Odoo ERP, e-commerce & hospital management by Sayyan – best low budget freelance developer in Malappuram, Kerala.",
    url: "https://getsayyan.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
