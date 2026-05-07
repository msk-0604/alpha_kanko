import styles from "./home.module.css";
import { instagramUrl } from "./content";

export function MobileFixedCTA() {
  return (
    <div className={styles.mobileFixedCta}>
      <a href="tel:0775793507" aria-label="電話する">
        <span>📞</span>電話する
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagramで相談">
        <span aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        </span>
        Instagram
      </a>
      <a href="/contact" aria-label="お問い合わせフォーム">
        <span>✉</span>お問い合わせ
      </a>
    </div>
  );
}
