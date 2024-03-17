import type { Metadata } from "next";
import { Karma } from "next/font/google";
import Header from "./header/layout";
import Footer from "./footer/layout";
import "./globals.css";

const roboto = Karma({
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
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
