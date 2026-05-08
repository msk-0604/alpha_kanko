import Image from "next/image";
import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div id="hero-parallax" className={styles.heroMedia}>
        <Image
          className={styles.heroImage}
          src="/images/hero-construction.png"
          alt="株式会社アルファ管工の拠点と作業車両"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden />
      </div>
      <div className={styles.heroContentWrap}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 data-animate="hero-title">
              <span>地域の水まわりを支える。</span>
            </h1>
            <p className={styles.heroSub} data-animate="hero-description">
              <span className={styles.heroLine} data-animate="hero-line">
                滋賀県大津市を中心に、
              </span>
              <span className={styles.heroLine} data-animate="hero-line">
                給排水設備工事・水漏れ修理・水まわりのトラブルに対応しています。
              </span>
            </p>
            <div className={styles.heroActions} data-animate="hero-actions">
              <a href="tel:0775793507" className={styles.primaryButton} data-animate="cta-btn">
                電話する
              </a>
              <a href="/contact" className={styles.secondaryButton} data-animate="cta-btn">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
