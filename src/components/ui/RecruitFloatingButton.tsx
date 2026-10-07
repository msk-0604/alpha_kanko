import Link from "next/link";
import styles from "./recruit-floating-button.module.css";

export function RecruitFloatingButton() {
  return (
    <Link href="/contact" className={styles.button} aria-label="従業員募集（お問い合わせページへ）">
      <span className={styles.eyebrow} aria-hidden="true">
        RECRUIT
      </span>
      <span className={styles.label}>従業員募集</span>
    </Link>
  );
}
