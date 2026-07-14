import Link from "next/link";
import styles from "./home.module.css";

export function CompanySpotlightSection() {
  return (
    <section className={styles.companySpotlight} id="company-atmosphere" aria-labelledby="company-spotlight-title">
      <div className={styles.container}>
        <div className={styles.companySpotlightInner}>
          <p className={styles.sectionEyebrowLight}>COMPANY</p>
          <h2 id="company-spotlight-title" className={styles.companySpotlightTitle}>
            <span>アルファ管工の</span>
            <span>会社について</span>
          </h2>
          <p className={styles.companySpotlightLead}>
            創業平成3年。大津市指定の給水・排水設備工事事業者として、
            地域のインフラと水まわりを支えてきました。
            品質と安全を大切に、個人住宅から法人・官公庁案件まで対応します。
          </p>
          <ul className={styles.companySpotlightFacts}>
            <li>
              <span>創業</span>
              <strong>平成3年</strong>
            </li>
            <li>
              <span>指定給水装置工事事業者</span>
              <strong>大津市 第192号</strong>
            </li>
            <li>
              <span>指定排水設備工事事業者</span>
              <strong>大津市 第192号</strong>
            </li>
          </ul>
          <Link href="/#company-info" className={styles.outlineButtonLight}>
            会社情報を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
