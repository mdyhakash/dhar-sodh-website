import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/src/config/site";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name.bn} (${siteConfig.name.en}) - ${siteConfig.tagline.bn}`,
  description: siteConfig.description.bn,
  keywords: [
    "DharSodh",
    "ধারশোধ",
    "লেনদেন খাতা",
    "বাকির খাতা",
    "হিসাব খাতা",
    "personal loan tracker",
    "debt manager bangladesh",
    "khata app android",
    "open source ledger",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  openGraph: {
    title: `${siteConfig.name.bn} (${siteConfig.name.en})`,
    description: siteConfig.tagline.bn,
    url: siteConfig.url,
    siteName: "DharSodh",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name.bn} (${siteConfig.name.en})`,
    description: siteConfig.tagline.bn,
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      translate="no"
      className={`${hindSiliguri.variable} ${inter.variable} scroll-smooth notranslate`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-indigo-600 selection:text-white notranslate">
        {children}
      </body>
    </html>
  );
}
