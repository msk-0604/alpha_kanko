import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroMedia}>
        <Image
          className={styles.heroImage}
          src="/images/hero-construction.webp"
          alt="株式会社アルファ管工の施工現場"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={90}
        />
        <div className={styles.heroOverlay} aria-hidden />
      </div>
      <div className={styles.heroContentWrap}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.heroBrand} data-animate="hero-brand">
              ALPHA KANKO
            </p>
            <h1 data-animate="hero-title">
              <span className={styles.heroBrandJa}>アルファ管工</span>
              <span className={styles.heroHeadline}>水と配管で、</span>
              <span className={styles.heroHeadline}>まちの暮らしを支える。</span>
            </h1>
            <p className={styles.heroSub} data-animate="hero-description">
              滋賀県大津市を拠点に、給排水設備工事・配管工事・設備更新まで。
              住宅から法人・施設案件まで、確かな技術で対応します。
            </p>
            <div className={styles.heroActions} data-animate="hero-actions">
              <Link href="/works" className={styles.primaryButton}>
                施工事例を見る
              </Link>
              <a href="tel:0775793507" className={styles.secondaryButton}>
                077-579-3507
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
