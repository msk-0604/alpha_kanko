import { supportItems } from "./content";
import styles from "./home.module.css";

export function SupportSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>未来ある子供たちへの応援</h2>
        <a href="/recruit" className={styles.sectionLink}>
          一覧へ
        </a>
        <h3 className={styles.subSectionTitle}>未来ある子供たちへの応援</h3>
        <div className={styles.cardGrid}>
          {supportItems.map((item) => (
            <article key={item.title} className={styles.card} data-animate="work-card">
              <p className={styles.newsDate}>{item.date}</p>
              <h3>{item.title}</h3>
              <p>次世代育成と地域の未来につながる活動を推進しています。</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
