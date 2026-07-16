import Link from "next/link";
import { CountUp } from "@/components/ui/CountUp";
import styles from "./home.module.css";

/** 創業平成3年（1991年）からの経過年数 */
const YEARS_SINCE_FOUNDING = new Date().getFullYear() - 1991;

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
              <span>創業からの歩み</span>
              <strong>
                <CountUp end={YEARS_SINCE_FOUNDING} suffix="年" />
              </strong>
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
          <div className={styles.companySpotlightActions}>
            <Link href="/company" className={styles.outlineButtonLight}>
              会社案内を見る
            </Link>
            <Link href="/greeting" className={styles.outlineButtonLight}>
              代表挨拶を読む
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
