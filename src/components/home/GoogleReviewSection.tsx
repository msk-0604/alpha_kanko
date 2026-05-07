import { googleReviews } from "./content";
import styles from "./home.module.css";

function Stars({ count }: { count: number }) {
  return <span className={styles.stars}>{"★".repeat(count)}{"☆".repeat(5 - count)}</span>;
}

export function GoogleReviewSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="reviews">
      <div className={styles.container}>
        <h2>Google 口コミ</h2>
        <div className={styles.reviewGrid}>
          {googleReviews.map((review) => (
            <article key={review.name} className={styles.reviewCard} data-animate="fade-card">
              <div className={styles.reviewTop}>
                <Stars count={review.rating} />
                <span className={styles.googleIcon}>G</span>
              </div>
              <p>{review.comment}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
        <a href="https://www.google.com/search?q=株式会社アルファ管工" target="_blank" rel="noopener noreferrer" className={styles.sectionLink}>
          Google口コミはこちら
        </a>
      </div>
    </section>
  );
}
