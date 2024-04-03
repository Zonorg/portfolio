import type { Metadata } from "next";
import { Enriqueta } from "next/font/google";
import Header from "./components/header/layout";
import Footer from "./components/footer/layout";
import "./globals.css";

const lato = Enriqueta({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renzo Viscio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
