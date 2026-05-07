import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroVisual} data-animate="hero-visual">
        <div className={styles.pipeShape} data-animate="pipe-main" />
        <div className={styles.pipeShapeSecondary} data-animate="pipe-sub" />
      </div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge} data-animate="hero-badge">
            ALPHA KANKO
          </span>
          <p className={styles.heroLead} data-animate="hero-lead">
            誠実な施工で地域を支える
          </p>
          <h1 data-animate="hero-title">
            <span>未来を支え、街を守る。</span>
            <span>確かな設備技術。</span>
          </h1>
          <p data-animate="hero-description">
            給排水衛生設備工事・配管工事・水道施設工事まで対応。法人・公共・一般住宅の幅広い工事ニーズに応えます。
          </p>
          <div className={styles.heroStats} data-animate="hero-stats">
            <div className={styles.heroStatCard}>
              <strong>公共・法人対応</strong>
              <span>入札案件・施設改修にも対応</span>
            </div>
            <div className={styles.heroStatCard}>
              <strong>品質管理体制</strong>
              <span>現場・工程・安全を一元管理</span>
            </div>
          </div>
          <div className={styles.heroActions} data-animate="hero-actions">
            <a href="#contact" className={styles.primaryButton} data-animate="cta-btn">
              お問い合わせ
            </a>
            <a href="#business" className={styles.secondaryButton} data-animate="cta-btn">
              事業案内を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
