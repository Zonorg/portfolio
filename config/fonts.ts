import { Enriqueta, Inter } from "next/font/google";

export const fontSerif = Enriqueta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-sans",
});
