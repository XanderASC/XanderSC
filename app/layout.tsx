import type { Metadata } from "next";
import { Andada_Pro, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const andadaPro = Andada_Pro({
  variable: "--font-andada-pro",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Xander SC Portfolio",
  description: "Xander Sharkey-Chouinard’s portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${andadaPro.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <svg className="h-0">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" style={{stopColor: "var(--secondary)"}}></stop>
              <stop offset="100%" style={{stopColor: "var(--tertiary)"}}></stop>
            </linearGradient>
          </defs>
        </svg>
        <Header />
        <div className="flex flex-col flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
