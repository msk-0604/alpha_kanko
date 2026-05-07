import { companyProfile } from "./content";
import styles from "./home.module.css";

export function CompanyProfileSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="company-info">
      <div className={styles.container}>
        <h2>会社情報</h2>
        <div className={styles.profileTable}>
          {companyProfile.map((row) => (
            <div key={row.label} className={styles.profileRow}>
              <p>{row.label}</p>
              <p>
                {row.label === "TEL"
                  ? <a href="tel:0775793507">{row.value}</a>
                  : row.label === "E-mail"
                    ? <a href="mailto:honsha@alpha-kanko.co.jp">{row.value}</a>
                    : row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
