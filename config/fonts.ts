import { Enriqueta } from "next/font/google";

export const fontSans = Enriqueta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const fontMono = Enriqueta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});
