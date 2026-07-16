import Link from "next/link";
import { areaList } from "./content";
import styles from "./home.module.css";

export function AreaSection() {
  return (
    <section className={styles.section} id="area">
      <div className={styles.container}>
        <header className={styles.showcaseHeader}>
          <p className={styles.sectionEyebrow}>AREA</p>
          <h2 className={styles.showcaseTitle}>
            <span>対応エリア</span>
          </h2>
          <p className={styles.showcaseLead}>
            大津市を中心に、近隣まで足を伸ばして伺います。詳細は現場の場所によりご相談ください。
          </p>
        </header>
        <ul className={styles.areaEditorialList}>
          {areaList.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className={styles.areaNote}>
          <Link href="/area">対応エリアの詳細を見る</Link>
        </p>
      </div>
    </section>
  );
}
