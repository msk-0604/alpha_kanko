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
  title: "株式会社アルファ管工｜滋賀県大津市の配管工事・水道設備工事",
  description:
    "滋賀県大津市の株式会社アルファ管工。配管工事・水道設備工事・給排水設備工事・修繕対応まで迅速に対応。法人・官公庁・施設管理者様からのご相談も承ります。",
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
    title: "株式会社アルファ管工｜滋賀県大津市の配管工事・水道設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。配管工事・水道設備工事・給排水設備工事・修繕対応まで迅速に対応。法人・官公庁・施設管理者様からのご相談も承ります。",
    images: [{ url: "/ogp.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社アルファ管工｜滋賀県大津市の配管工事・水道設備工事",
    description:
      "滋賀県大津市の株式会社アルファ管工。配管工事・水道設備工事・給排水設備工事・修繕対応まで迅速に対応。法人・官公庁・施設管理者様からのご相談も承ります。",
    images: ["/ogp.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
