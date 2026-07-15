import Link from "next/link";
import { companyProfile } from "./content";
import styles from "./home.module.css";

export function CompanyProfileSection() {
  return (
    <section className={styles.section} id="company-info">
      <div className={styles.container}>
        <header className={styles.showcaseHeader}>
          <p className={styles.sectionEyebrow}>COMPANY</p>
          <h2 className={styles.showcaseTitle}>
            <span>会社情報</span>
          </h2>
        </header>
        <div className={styles.profileTable}>
          {companyProfile.map((row) => (
            <div key={row.label} className={styles.profileRow}>
              <p>{row.label}</p>
              <p>
                {row.label === "TEL" ? (
                  <a href="tel:0775793507">{row.value}</a>
                ) : row.label === "E-mail" ? (
                  <a href="mailto:honsha@alpha-kanko.co.jp">{row.value}</a>
                ) : (
                  row.value
                )}
              </p>
            </div>
          ))}
        </div>
        <p className={styles.areaNote}>
          <Link href="/company">会社案内を詳しく見る</Link>
        </p>
      </div>
    </section>
  );
}
