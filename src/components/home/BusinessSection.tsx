import { businessItems } from "./content";
import styles from "./home.module.css";

export function BusinessSection() {
  return (
    <section className={styles.section} id="business">
      <div className={styles.container}>
        <div className={styles.aboutBlock}>
          <h2>
            アルファ管工の
            <br />
            事業について
          </h2>
          <p className={styles.sectionIntro}>
            給排水設備・配管・水道施設工事を中心に、各部門の連携でさまざまなニーズに対応します。
          </p>
          <div className={styles.aboutSplit}>
            {businessItems.map((item) => (
              <article key={item} className={styles.aboutItem} data-animate="business-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <a href="/business" className={styles.sectionLink}>
            事業案内
          </a>
        </div>
      </div>
    </section>
  );
}
