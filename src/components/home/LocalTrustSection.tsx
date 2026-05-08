import Image from "next/image";
import { localTrustPoints } from "./content";
import styles from "./home.module.css";

export function LocalTrustSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.localTrustSplit}>
          <div className={styles.localTrustText}>
            <p className={styles.sectionEyebrow}>地域密着</p>
            <h2>水まわりのホームドクター</h2>
            <p className={styles.sectionIntroCalm}>
              大津市を中心に、暮らしの近くで丁寧に向き合います。営業口調にはせず、現場のことがわかる相談窓口でありたいと考えています。
            </p>
            <ul className={styles.localTrustList}>
              {localTrustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.localTrustFigure} data-animate="fade-card">
            <div className={styles.localTrustImageWrap}>
              <Image
                src="/images/trouble-under-sink.png"
                alt="配管まわりの確認作業"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
