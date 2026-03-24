import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Kushal Biswas | Graphic Designer",
  description:
    "Creative graphic designer specializing in branding, logo design, and visual identity. View my portfolio and let's create something amazing together.",
  keywords: [
    "graphic designer",
    "branding",
    "logo design",
    "visual identity",
    "UI/UX",
    "portfolio",
  ],

  // generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        {/* <Analytics /> */}
        <Toaster />
      </body>
    </html>
  );
}
