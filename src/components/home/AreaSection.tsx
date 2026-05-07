import { areaList } from "./content";
import styles from "./home.module.css";

export function AreaSection() {
  return (
    <section className={styles.section} id="area">
      <div className={styles.container}>
        <h2>対応エリア</h2>
        <p className={styles.sectionIntro}>大津市を中心に迅速対応。緊急対応は状況に応じて当日ご案内します。</p>
        <div className={styles.areaListWrap}>
          <div className={styles.areaMapLabel}>滋賀県中心 / 関西近郊</div>
          {areaList.map((area) => (
            <p key={area} className={styles.areaBadge}>
              {area}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
