import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroVisual} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge} data-animate="hero-badge">
            ALPHA KANKO
          </span>
          <h1 data-animate="hero-title">
            <span>滋賀県大津市の配管工事・水道設備工事なら</span>
            <span>確かな技術で、地域の水まわりと設備を支える。</span>
          </h1>
          <p data-animate="hero-description">
            法人・官公庁・施設管理者様向けのご相談から修繕対応まで、迅速かつ丁寧に対応します。
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
