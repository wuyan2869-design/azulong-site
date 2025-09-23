import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AzuLong Industrial Fasteners - Reliable Quality, Global Service",
  description: "Professional B2B manufacturer of industrial fasteners with 15+ years experience. ISO 9001:2015 certified quality, serving global markets. Premium Quality, Cost Advantage, On-time Service.",
  keywords: "industrial fasteners, construction machinery parts, excavator fasteners, undercarriage parts, Ningbo China, ISO certified, B2B manufacturing",
  authors: [{ name: "AzuLong Industrial Fasteners" }],
  creator: "AzuLong Industrial Fasteners",
  publisher: "AzuLong Industrial Fasteners",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azulongparts.com",
    siteName: "AzuLong Industrial Fasteners",
    title: "AzuLong Industrial Fasteners - Reliable Quality, Global Service",
    description: "Professional B2B manufacturer of industrial fasteners with 15+ years experience. ISO 9001:2015 certified quality, serving global markets.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AzuLong Industrial Fasteners - Quality Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@azulongparts",
    creator: "@azulongparts",
    title: "AzuLong Industrial Fasteners - Reliable Quality, Global Service",
    description: "Professional manufacturer of industrial fasteners with 15+ years experience. ISO 9001:2015 certified quality.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CN-ZJ",
    "geo.placename": "Ningbo",
    "geo.position": "29.8683;121.5440",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
