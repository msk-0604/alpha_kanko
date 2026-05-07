import { areaList, instagramUrl } from "./content";
import styles from "./home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <section>
            <h3>株式会社アルファ管工</h3>
            <p>滋賀県大津市坂本6丁目8-8</p>
            <p>TEL: 077-579-3507</p>
            <p>E-mail: honsha@alpha-kanko.co.jp</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerInstagram}
              aria-label="Instagramへ移動"
              title="Instagram"
            >
              <span className={styles.instagramBadge} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
                </svg>
              </span>
            </a>
          </section>
          <section>
            <h3>対応エリア</h3>
            <ul>
              {areaList.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>関連ページ</h3>
            <ul>
              <li>
                <a href="#company-info">会社案内</a>
              </li>
              <li>
                <a href="#business">事業案内</a>
              </li>
              <li>
                <a href="#case-studies">施工事例</a>
              </li>
              <li>
                <a href="#access">アクセス</a>
              </li>
            </ul>
          </section>
          <section className={styles.footerCtaColumn}>
            <h3>お問い合わせ</h3>
            <p>設備工事・修繕のご相談はお気軽にご連絡ください。</p>
            <a href="tel:0775793507" className={styles.footerCallButton}>
              077-579-3507
            </a>
            <a href="/contact" className={styles.footerContactButton}>
              お問い合わせフォーム
            </a>
          </section>
        </div>
        <small>© Alpha Kanko Co., Ltd.</small>
      </div>
    </footer>
  );
}
