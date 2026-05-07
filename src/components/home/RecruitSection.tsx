import styles from "./home.module.css";

export function RecruitSection() {
  return (
    <section className={styles.recruitSection} id="recruit">
      <div className={styles.container}>
        <div className={styles.recruitCard}>
          <h2>街のインフラを支える技術を、次の世代へ。</h2>
          <p>
            経験者はもちろん、未経験から手に職を付けたい方も歓迎。教育体制と資格取得支援で成長を後押しします。
          </p>
          <a href="/recruit" className={styles.primaryButton}>
            採用情報を見る
          </a>
        </div>
      </div>
    </section>
  );
}
