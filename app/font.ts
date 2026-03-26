import { Inter, Cutive_Mono } from "next/font/google";
import localFont from "next/font/local";

// Inter & Mono (Google fonts)
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

export const mono = Cutive_Mono({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Nasalization (local font)
export const nasalization = localFont({
  src: [
    {
      path: "./assets/fonts/nasalization.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasalization",
  display: "swap",
});

// Quentine (local font)
export const quentine = localFont({
  src: [
    {
      path: "./assets/fonts/quentin.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-quentine",
  display: "swap",
});
// amber (local font)
export const amber = localFont({
  src: [
    {
      path: "./assets/fonts/Quicksand-Bold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-amber",
  display: "swap",
});