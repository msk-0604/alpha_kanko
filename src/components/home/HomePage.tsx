import { Header } from "./Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { HomeBelowFold } from "./HomeBelowFold";
import { ScrollEffects } from "./ScrollEffects";
import styles from "./home.module.css";

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "株式会社アルファ管工",
  url: "https://alphakanko.jp",
  inLanguage: "ja",
  publisher: {
    "@type": "Organization",
    name: "株式会社アルファ管工",
    url: "https://alphakanko.jp",
  },
};

export function HomePage() {
  return (
    <div className={`${styles.page} ${styles.pagePremium}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
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
