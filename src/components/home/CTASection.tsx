import Link from "next/link";
import styles from "./home.module.css";

export function CTASection() {
  return (
    <section className={styles.ctaPremium} id="contact" data-reveal>
      <div className={styles.container}>
        <p className={styles.sectionEyebrowLight}>CONTACT</p>
        <h2 className={styles.ctaPremiumTitle}>ご相談・ご依頼はこちら</h2>
        <p className={styles.ctaPremiumLead}>
          給排水設備工事・修繕・設備更新のご相談を承ります。
          内容を伺い、現場に合わせてご案内いたします。
        </p>
        <div className={styles.ctaActions}>
          <a href="tel:0775793507" className={styles.outlineButtonLight}>
            077-579-3507
          </a>
          <Link href="/contact" className={styles.primaryButton}>
            お問い合わせフォーム
          </Link>
        </div>
      </div>
    </section>
  );
}
