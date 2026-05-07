import { businessItems } from "./content";
import styles from "./home.module.css";

export function BusinessSection() {
  return (
    <section className={styles.section} id="business">
      <div className={styles.container}>
        <h2>事業内容</h2>
        <p className={styles.sectionIntro}>
          配管工事・水道設備工事を中心に、官公庁案件から民間修繕まで幅広く対応しています。
        </p>
        <div className={styles.businessGrid}>
          {businessItems.map((item) => (
            <article key={item} className={styles.businessCard} data-animate="business-card">
              <h3>{item}</h3>
              <p>現地調査から施工、報告まで一貫対応し、運用面まで見据えたご提案を行います。</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
