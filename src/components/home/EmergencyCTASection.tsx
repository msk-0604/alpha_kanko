import styles from "./home.module.css";

export function EmergencyCTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>水まわりのトラブルを今すぐ解決</h2>
        <p>水漏れ・詰まり・給湯器トラブルなど、お困りごとに迅速対応いたします。</p>
        <div className={styles.ctaActions}>
          <a href="tel:0775793507" className={styles.secondaryButton}>
            今すぐ電話する
          </a>
          <a href="/contact" className={styles.primaryButton}>
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
