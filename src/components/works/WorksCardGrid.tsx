import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/works";
import styles from "./works.module.css";

type WorksCardGridProps = {
  items: WorkItem[];
  showSectionHeader?: boolean;
};

export function WorksCardGrid({ items, showSectionHeader = true }: WorksCardGridProps) {
  return (
    <div className={styles.worksBlock} data-reveal>
      {showSectionHeader ? (
        <header className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>WORKS</p>
          <h2 className={styles.sectionTitle}>施工事例</h2>
          <p className={styles.sectionLead}>
            住宅・施設・法人案件など、さまざまな現場の給排水設備工事に対応しています。
            新築設備工事から修繕・設備更新まで、現場の状況に合わせた施工を行っています。
          </p>
        </header>
      ) : null}

      <ul className={styles.cardGrid}>
        {items.map((item) => (
          <li key={item.slug}>
            <article className={styles.card}>
              <Link href={`/works/${item.slug}`} className={styles.cardLink}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    quality={90}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardCategory}>{item.category}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <span className={styles.cardCta}>施工事例を見る</span>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
