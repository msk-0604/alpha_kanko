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
  title: "株式会社アルファ管工｜給排水設備・配管工事・水道工事",
  description:
    "給排水衛生設備工事、配管工事、水道施設工事、修繕・メンテナンスまで対応。地域密着の確かな技術で水まわりとインフラを支えます。",
  keywords: [
    "管工事",
    "水道工事",
    "配管工事",
    "給排水設備",
    "衛生設備工事",
    "水道施設工事",
    "設備工事",
  ],
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
