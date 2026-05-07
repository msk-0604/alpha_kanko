import styles from "./home.module.css";

export function CTASection() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.container}>
        <h2>配管工事・水道設備工事のご相談はお気軽にお問い合わせください。</h2>
        <p>法人・官公庁・施設管理者さま向けのご相談から修繕対応まで、迅速にご案内します。</p>
        <div className={styles.ctaActions}>
          <a href="tel:0775793507" className={styles.secondaryButton} aria-label="電話で相談する">
            <span aria-hidden="true">📞</span>電話で相談する
          </a>
          <a href="/contact" className={styles.primaryButton} aria-label="お問い合わせフォームへ">
            <span aria-hidden="true">✉</span>お問い合わせフォーム
          </a>
        </div>
      </div>
    </section>
  );
}
