import { newsItems } from "./content";
import styles from "./home.module.css";

export function NewsSection() {
  const hasNews = newsItems.length > 0;

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="news">
      <div className={styles.container}>
        <header className={styles.showcaseHeader}>
          <p className={styles.sectionEyebrow}>NEWS</p>
          <h2 className={styles.showcaseTitle}>
            <span>お知らせ</span>
          </h2>
        </header>
        {hasNews ? (
          <ul className={styles.newsEditorialList}>
            {newsItems.map((item) => (
              <li key={item.id} className={styles.newsEditorialItem}>
                <p className={styles.newsEditorialMeta}>
                  <time dateTime={item.date.replace(/\./g, "-")}>{item.date}</time>
                  <span>{item.category}</span>
                </p>
                <p className={styles.newsEditorialTitle}>{item.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.newsEmpty}>現在、お知らせはありません。</p>
        )}
      </div>
    </section>
  );
}
