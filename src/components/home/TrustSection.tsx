import { trustFacts } from "./content";
import styles from "./home.module.css";

export function TrustSection() {
  return (
    <section className={styles.trustSection} aria-label="信頼情報">
      <div className={styles.container}>
        <div className={styles.trustGrid}>
          {trustFacts.map((fact) => (
            <article key={fact.label} className={styles.trustCard} data-animate="trust-card">
              <p>{fact.label}</p>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
