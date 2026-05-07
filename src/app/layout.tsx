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
  title: "大津市の水道工事・設備工事ならAlpha Kanko（株式会社アルファ管工）",
  description:
    "大津市の水道工事・設備工事なら株式会社アルファ管工。給排水設備、配管工事、修繕・メンテナンスまで地域密着で対応します。",
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
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "株式会社アルファ管工",
    title: "大津市の水道工事・設備工事ならAlpha Kanko（株式会社アルファ管工）",
    description:
      "大津市の水道工事・設備工事なら株式会社アルファ管工。給排水設備、配管工事、修繕・メンテナンスまで地域密着で対応します。",
  },
  twitter: {
    card: "summary_large_image",
    title: "大津市の水道工事・設備工事ならAlpha Kanko（株式会社アルファ管工）",
    description:
      "大津市の水道工事・設備工事なら株式会社アルファ管工。給排水設備、配管工事、修繕・メンテナンスまで地域密着で対応します。",
  },
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
