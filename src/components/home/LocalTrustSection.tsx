import { localTrustPoints } from "./content";
import styles from "./home.module.css";

export function LocalTrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>地域密着・安心対応</h2>
        <p className={styles.sectionIntro}>地域の水まわりのホームドクターとして、親切・丁寧・誠実な対応を徹底します。</p>
        <div className={styles.localTrustGrid}>
          {localTrustPoints.map((point) => (
            <article key={point} className={styles.localTrustCard} data-animate="fade-card">
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
