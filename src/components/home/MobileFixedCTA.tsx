import styles from "./home.module.css";

export function MobileFixedCTA() {
  return (
    <div className={styles.mobileFixedCta}>
      <a href="tel:0775793507" aria-label="電話する">
        <span aria-hidden="true">📞</span>電話する
      </a>
      <a href="/contact" aria-label="お問い合わせフォーム">
        <span aria-hidden="true">✉</span>お問い合わせ
      </a>
    </div>
  );
}
