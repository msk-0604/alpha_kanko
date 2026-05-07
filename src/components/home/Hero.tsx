import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroVisual} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge} data-animate="hero-badge">
            地域密着 / 迅速対応
          </span>
          <h1 data-animate="hero-title">
            <span>水まわりのトラブルを迅速対応</span>
            <span>滋賀県大津市の水まわりのホームドクター</span>
          </h1>
          <p data-animate="hero-description">
            水漏れ・詰まり・給排水設備工事まで、
            地域密着で迅速・丁寧に対応いたします。
          </p>
          <div className={styles.heroActions} data-animate="hero-actions">
            <a href="tel:0775793507" className={styles.primaryButton} data-animate="cta-btn">
              電話で相談する
            </a>
            <a href="/contact" className={styles.secondaryButton} data-animate="cta-btn">
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
