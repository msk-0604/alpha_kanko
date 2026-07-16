import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export function StatementBand() {
  return (
    <section className={styles.statementBand} aria-labelledby="statement-title">
      <div className={styles.statementMedia}>
        <Image
          src="/images/works/new-house-plumbing-01.webp"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className={styles.statementImage}
        />
        <div className={styles.statementShade} aria-hidden />
      </div>
      <div className={styles.container}>
        <div className={styles.statementCopy} data-reveal>
          <p className={styles.sectionEyebrowLight}>PHILOSOPHY</p>
          <h2 id="statement-title" className={styles.statementTitle}>
            <span>確かな配管技術で、</span>
            <span>まちの水まわりを支える。</span>
          </h2>
          <p className={styles.statementLead}>
            新築設備から修繕・更新まで。現場の条件を見極め、安全と品質を第一に施工します。
          </p>
          <Link href="/company" className={styles.outlineButtonLight}>
            会社案内
          </Link>
        </div>
      </div>
    </section>
  );
}
