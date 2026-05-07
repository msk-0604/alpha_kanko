import { strengths } from "./content";
import styles from "./home.module.css";

export function StrengthSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="strengths">
      <div className={styles.container}>
        <h2>選ばれる理由</h2>
        <div className={styles.strengthGrid}>
          {strengths.map((item) => (
            <article key={item} className={styles.strengthCard} data-animate="fade-card">
              <p className={styles.cardIcon} aria-hidden="true">
                ✓
              </p>
              <h3>{item}</h3>
              <p>現場ごとの条件に合わせ、品質・安全・納期のバランスを重視して対応します。</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
