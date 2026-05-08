import styles from "./home.module.css";

export function EmergencyCTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>お困りごとがありましたら</h2>
        <p>水漏れ・詰まりなど、まずはお気軽にご連絡ください。</p>
        <div className={styles.ctaActions}>
          <a href="tel:0775793507" className={styles.secondaryButton}>
            電話する
          </a>
          <a href="/contact" className={styles.primaryButton}>
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
