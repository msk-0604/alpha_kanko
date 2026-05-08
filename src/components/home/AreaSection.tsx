import Image from "next/image";
import { areaList } from "./content";
import styles from "./home.module.css";

export function AreaSection() {
  return (
    <section className={styles.section} id="area">
      <figure className={styles.areaVisual} data-animate="fade-card">
        <div className={styles.areaVisualInner}>
          <Image
            src="/images/hero-construction.png"
            alt="滋賀県大津市を拠点にした対応エリア"
            fill
            sizes="100vw"
            loading="lazy"
            className={styles.areaVisualImg}
          />
        </div>
      </figure>
      <div className={styles.container}>
        <p className={styles.sectionEyebrow}>対応エリア</p>
        <h2>滋賀から近隣へ</h2>
        <p className={styles.sectionIntroCalm}>大津市を中心に、近隣まで足を伸ばして伺います。</p>
        <div className={styles.areaListWrap}>
          <div className={styles.areaMapLabel}>大津市中心 / 迅速対応</div>
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
