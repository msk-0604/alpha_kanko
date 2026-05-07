import { areaList } from "./content";
import styles from "./home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <h3>株式会社アルファ管工</h3>
            <p>滋賀県大津市坂本6丁目8-8</p>
            <p>TEL: 077-579-3507</p>
            <p>E-mail: honsha@alpha-kanko.co.jp</p>
          </div>
          <div>
            <h3>対応エリア</h3>
            <ul>
              {areaList.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>関連ページ</h3>
            <ul>
              <li>
                <a href="#company-info">会社案内</a>
              </li>
              <li>
                <a href="#business">事業案内</a>
              </li>
              <li>
                <a href="#disclosure">情報公開</a>
              </li>
              <li>
                <a href="#csr">CSR</a>
              </li>
            </ul>
          </div>
        </div>
        <small>© Alpha Kanko Co., Ltd.</small>
      </div>
    </footer>
  );
}
