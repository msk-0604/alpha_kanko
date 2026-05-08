import Image from "next/image";
import { companyAtmospherePhotos, disclosureItems } from "./content";
import styles from "./home.module.css";

export function CompanyAtmosphereSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAtmosphere}`} id="company-atmosphere">
      <div className={styles.containerNarrow}>
        <p className={styles.sectionEyebrow}>会社紹介</p>
        <h2>地域に根ざした仕事</h2>
        <p className={styles.sectionIntroCalm}>
          創業は平成3年。滋賀県大津市を拠点に、水まわりの保全と工事に向き合ってきました。
        </p>
        <ul className={styles.disclosureInline} aria-label="指定工事業者">
          {disclosureItems.slice(0, 2).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className={styles.atmosphereGrid} data-animate="fade-card">
        {companyAtmospherePhotos.map((photo) => (
          <figure key={photo.src} className={styles.atmosphereFigure}>
            <div className={styles.atmosphereImageWrap}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
