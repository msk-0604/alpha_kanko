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
              <p>{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
