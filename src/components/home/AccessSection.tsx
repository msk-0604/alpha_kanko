import styles from "./home.module.css";

const mapEmbedUrl =
  "https://www.google.com/maps?q=%E3%80%92520-0113%20%E6%BB%8B%E8%B3%80%E7%9C%8C%E5%A4%A7%E6%B4%A5%E5%B8%82%E5%9D%82%E6%9C%AC6%E4%B8%81%E7%9B%AE8-8&output=embed";

const mapLinkUrl =
  "https://www.google.com/maps/search/?api=1&query=%E6%BB%8B%E8%B3%80%E7%9C%8C%E5%A4%A7%E6%B4%A5%E5%B8%82%E5%9D%82%E6%9C%AC6%E4%B8%81%E7%9B%AE8-8";

export function AccessSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="access">
      <div className={styles.container}>
        <header className={styles.showcaseHeader}>
          <p className={styles.sectionEyebrow}>ACCESS</p>
          <h2 className={styles.showcaseTitle}>
            <span>アクセス</span>
          </h2>
        </header>
        <div className={styles.accessEditorial}>
          <div className={styles.accessInfo}>
            <h3>株式会社アルファ管工 本社</h3>
            <p>〒520-0113 滋賀県大津市坂本6丁目8-8</p>
            <p>
              TEL: <a href="tel:0775793507">077-579-3507</a>
            </p>
            <p>JR比叡山坂本駅周辺から車で約5分</p>
            <p>現地調査時は事前に到着予定時刻をご連絡します。</p>
            <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className={styles.mapExternalLink}>
              Google マップで開く
            </a>
          </div>
          <div className={styles.accessMap}>
            <iframe
              src={mapEmbedUrl}
              title="株式会社アルファ管工へのアクセスマップ"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
