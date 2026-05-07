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
            <article key={item.title} className={styles.businessCard} data-animate="business-card">
              <p className={styles.cardIcon} aria-hidden="true">
                {item.icon}
              </p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
