import styles from "./home.module.css";

export function MobileFixedCTA() {
  return (
    <div className={styles.mobileFixedCta}>
      <a href="tel:0775793507">電話</a>
      <a href="#contact">お問い合わせ</a>
      <a href="#access">アクセス</a>
    </div>
  );
}
