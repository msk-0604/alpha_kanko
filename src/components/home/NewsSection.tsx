import { newsItems } from "./content";
import styles from "./home.module.css";

export function NewsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <h2>お知らせ</h2>
        <a href="/news" className={styles.sectionLink}>
          一覧へ
        </a>
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
