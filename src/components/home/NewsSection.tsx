import { newsItems } from "./content";
import styles from "./home.module.css";

export function NewsSection() {
  const hasNews = newsItems.length > 0;

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="news">
      <div className={styles.container}>
        <h2>お知らせ / 重要なお知らせ</h2>
        {hasNews ? (
          <div className={styles.newsList}>
            {newsItems.map((item) => (
              <article key={item.id} className={styles.newsItem} data-animate="fade-card">
                <p className={styles.newsDate}>
                  <span>{item.date}</span>
                  <span className={styles.newsCategory}>{item.category}</span>
                </p>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.newsEmpty}>現在、お知らせはありません。</p>
        )}
        <a className={styles.sectionLink} href="/news" aria-label="お知らせ一覧へ">
          お知らせ一覧を見る
        </a>
      </div>
    </section>
  );
}
