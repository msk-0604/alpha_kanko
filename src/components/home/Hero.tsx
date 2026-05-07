import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroVisual} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge} data-animate="hero-badge">
            SHIGA / OTSU
          </span>
          <h1 data-animate="hero-title">
            <span>水まわりから街のインフラまで、</span>
            <span>確かな技術で支える。</span>
          </h1>
          <p data-animate="hero-description">
            給排水衛生設備工事・配管工事・水道施設工事まで、
            法人・官公庁・施設管理者様の現場に迅速かつ丁寧に対応します。
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
