import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphakanko.jp"),
  title: "株式会社アルファ管工｜滋賀・大津市の管工事・配管工事・給排水設備工事",
  description:
    "滋賀県大津市の株式会社アルファ管工。管工事・配管工事・給排水設備工事・水道工事・水廻りリフォーム・漏水調査まで対応。大津市指定工事店として、法人・公共施設・一般住宅のご相談を承ります。",
  keywords: [
    "管工事 滋賀",
    "滋賀 配管工事",
    "滋賀 給排水設備",
    "大津市 管工事",
    "大津市 配管工事",
    "大津市 水道工事",
    "滋賀 水廻りリフォーム",
    "滋賀県 漏水調査",
    "大津市 漏水調査",
    "水素式漏水調査",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "株式会社アルファ管工",
    title: "株式会社アルファ管工｜滋賀・大津市の管工事・配管工事・給排水設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。管工事・配管工事・給排水設備工事・水道工事・水廻りリフォーム・漏水調査まで対応。大津市指定工事店としてご相談を承ります。",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社アルファ管工｜滋賀・大津市の管工事・配管工事・給排水設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。管工事・配管工事・給排水設備工事・水道工事・水廻りリフォーム・漏水調査まで対応。",
    images: ["/ogp.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
