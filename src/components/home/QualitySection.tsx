import { qualityItems } from "./content";
import styles from "./home.module.css";

export function QualitySection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <h2>安全・品質管理</h2>
        <div className={styles.qualityGrid}>
          {qualityItems.map((item) => (
            <article key={item} className={styles.qualityCard} data-animate="quality-card">
              <h3>{item}</h3>
              <p>
                手順を標準化し、記録・点検・改善のサイクルを徹底することで、安全で安定した品質を担保します。
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
