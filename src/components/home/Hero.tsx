import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroMedia}>
        <Image
          src="/images/hero-office.webp"
          alt="株式会社アルファ管工の事務所外観（滋賀県大津市）"
          fill
          priority
          sizes="100vw"
          quality={78}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} aria-hidden />
      </div>
      <div className={styles.heroContentWrap}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.heroBrand}>滋賀県大津市 / 給排水・配管工事</p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroHeadline}>水と配管で、</span>
              <span className={styles.heroHeadline}>まちの暮らしを支える。</span>
            </h1>
            <p className={styles.heroSub}>
              新築の設備工事から修繕・更新まで。住宅・法人・施設の現場に、確かな技術で対応します。
            </p>
            <div className={styles.heroActions}>
              <Link href="/works" className={styles.primaryButton}>
                施工事例を見る
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
