import styles from "./home.module.css";

export function AccessSection() {
  return (
    <section className={styles.section} id="access">
      <div className={styles.container}>
        <h2>アクセス</h2>
        <div className={styles.card}>
          <h3>株式会社アルファ管工 本社</h3>
          <p>〒520-0113 滋賀県大津市坂本6丁目8-8</p>
          <p>TEL: 077-579-3507</p>
          <p>E-mail: honsha@alpha-kanko.co.jp</p>
        </div>
      </div>
    </section>
  );
}
