import styles from "./home.module.css";

export function CTASection() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.container}>
        <h2>ご相談はお電話・フォームから</h2>
        <p>内容を伺い、現場に合わせてご案内いたします。</p>
        <div className={styles.ctaActions}>
          <a href="tel:0775793507" className={styles.secondaryButton} aria-label="電話で相談する">
            <span aria-hidden="true">📞</span>電話する
          </a>
          <a href="/contact" className={styles.primaryButton} aria-label="お問い合わせフォームへ">
            <span aria-hidden="true">✉</span>お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
