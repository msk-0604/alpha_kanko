import { customerVoices } from "./content";
import styles from "./home.module.css";

export function CustomerVoicesSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="voices">
      <div className={styles.container}>
        <h2>お客様の声</h2>
        <p className={styles.sectionIntro}>
          掲載は匿名化し、内容は許可をいただいたものから順次追加しています。
        </p>
        <div className={styles.voiceGrid}>
          {customerVoices.map((v) => (
            <article key={v.title} className={styles.voiceCard} data-animate="fade-card">
              <p className={styles.voiceQuote} aria-hidden="true">
                &ldquo;
              </p>
              <h3>{v.title}</h3>
              <p>{v.comment}</p>
              <strong>{v.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

