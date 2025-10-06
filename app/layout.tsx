import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import BackToTop from "@/components/BackToTop";
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
  metadataBase: new URL('https://azulong.com'),
  title: "AzuLong Industrial Fasteners - Premium Excavator Parts & Track Bolts for US Market",
  description: "Leading supplier of excavator track bolts, plow bolts & bucket teeth to North America. ISO 9001:2015 certified manufacturer with 15+ years experience. Competitive pricing, reliable delivery, excellent after-sales support for construction equipment OEMs and distributors.",
  keywords: "excavator track bolts, plow bolts, bucket teeth, construction equipment fasteners, undercarriage parts, industrial fasteners USA, excavator parts supplier, track bolt manufacturer, heavy equipment fasteners, construction machinery parts, OEM fasteners, aftermarket excavator parts",
  authors: [{ name: "AzuLong Industrial Fasteners" }],
  creator: "AzuLong Industrial Fasteners",
  publisher: "AzuLong Industrial Fasteners",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azulong.com",
    siteName: "AzuLong Industrial Fasteners",
    title: "Premium Excavator Track Bolts & Parts - AzuLong Industrial Fasteners",
    description: "Trusted by North American construction equipment distributors. Premium excavator track bolts, plow bolts & bucket teeth. ISO 9001:2015 certified with 15+ years manufacturing experience.",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-blue-600 focus:shadow"
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <StructuredData />
        <Navbar />
        <main id="main-content" className="min-h-screen bg-white">
          {children}
        </main>
        <BackToTop />
      </body>
    </html>
  );
}
