import { newsItems } from "./content";
import styles from "./home.module.css";

export function NewsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <h2>お知らせ / 重要なお知らせ</h2>
        <div className={styles.newsList}>
          {newsItems.map((item) => (
            <article key={item.title} className={styles.newsItem} data-animate="strength-card">
              <p className={styles.newsDate}>{item.date}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
