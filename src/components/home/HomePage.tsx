import { Header } from "./Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { HomeBelowFold } from "./HomeBelowFold";
import { ScrollEffects } from "./ScrollEffects";
import styles from "./home.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "株式会社アルファ管工",
      url: "https://www.alpha-kanko.com",
      telephone: "077-579-3507",
      email: "honsha@alpha-kanko.co.jp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "坂本6丁目8-8",
        addressLocality: "大津市",
        addressRegion: "滋賀県",
        postalCode: "520-0113",
        addressCountry: "JP",
      },
    },
    {
      "@type": "ConstructionBusiness",
      name: "株式会社アルファ管工",
      areaServed: ["滋賀県", "京都府南部", "大阪府北部"],
      serviceType: ["給排水衛生設備工事", "配管工事", "水道施設工事", "修繕・メンテナンス"],
    },
    {
      "@type": "Organization",
      name: "株式会社アルファ管工",
      url: "https://www.alpha-kanko.com",
    },
  ],
};

export function HomePage() {
  return (
    <div className={`${styles.page} ${styles.pagePremium}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollEffects />
      <Header variant="overlay" />
      <main>
        <Hero />
        <HomeBelowFold />
      </main>
      <Footer />
    </div>
  );
}
