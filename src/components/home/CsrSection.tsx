import { csrItems } from "./content";
import styles from "./home.module.css";

export function CsrSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="csr">
      <div className={styles.container}>
        <h2>地域貢献活動</h2>
        <a href="/csr" className={styles.sectionLink}>
          一覧へ
        </a>
        <h3 className={styles.subSectionTitle}>地域貢献活動</h3>
        <div className={styles.cardGrid}>
          {csrItems.map((item) => (
            <article key={item.title} className={styles.card} data-animate="work-card">
              <p className={styles.newsDate}>{item.date}</p>
              <h3>{item.title}</h3>
              <p>地域と連携した活動内容を継続的に発信しています。</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
