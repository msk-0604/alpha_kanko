import { companyHighlights } from "./content";
import styles from "./home.module.css";

export function CompanyInfoSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="company-info">
      <div className={styles.container}>
        <div className={styles.aboutBlock}>
          <h2>
            アルファ管工の
            <br />
            会社について
          </h2>
          <p className={styles.sectionIntro}>
            「誠実な施工で、地域に信頼される会社」を目指し、品質重視の施工体制を継続しています。
          </p>
          <div className={styles.aboutSplit}>
            {companyHighlights.map((item) => (
              <article key={item} className={styles.aboutItem} data-animate="business-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <a href="/company" className={styles.sectionLink}>
            会社案内
          </a>
        </div>
      </div>
    </section>
  );
}
