import styles from "./home.module.css";

export function AccessSection() {
  const mapEmbedUrl = "";

  return (
    <section className={styles.section} id="access">
      <div className={styles.container}>
        <h2>アクセス</h2>
        <div className={styles.accessGrid}>
          <div className={styles.card}>
            <h3>株式会社アルファ管工 本社</h3>
            <p>〒520-0113 滋賀県大津市坂本6丁目8-8</p>
            <p>TEL: 077-579-3507</p>
            <p>JR比叡山坂本駅周辺から車で約5分</p>
            <p>現地調査時は事前に到着予定時刻をご連絡します。</p>
          </div>
          <div className={styles.mapPlaceholder}>
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                title="株式会社アルファ管工へのアクセスマップ"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              />
            ) : (
              <p>GoogleMap埋め込みエリア（iframe URL設定で表示）</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
