import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpha-kanko.com"),
  title: "株式会社アルファ管工｜滋賀県大津市の給排水・配管・水道設備工事",
  description:
    "滋賀県大津市の株式会社アルファ管工。給排水衛生設備工事、配管工事、水道施設工事、修繕・メンテナンスまで対応。法人・公共施設・一般住宅のご相談を承ります。",
  keywords: [
    "管工事",
    "水道工事",
    "配管工事",
    "給排水設備",
    "衛生設備工事",
    "水道施設工事",
    "設備工事",
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
    title: "株式会社アルファ管工｜滋賀県大津市の給排水・配管・水道設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。給排水衛生設備工事、配管工事、水道施設工事、修繕・メンテナンスまで対応。法人・公共施設・一般住宅のご相談を承ります。",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社アルファ管工｜滋賀県大津市の給排水・配管・水道設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。給排水衛生設備工事、配管工事、水道施設工事、修繕・メンテナンスまで対応。法人・公共施設・一般住宅のご相談を承ります。",
    images: ["/ogp.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
