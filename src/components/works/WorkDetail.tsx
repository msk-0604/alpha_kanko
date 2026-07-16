import Link from "next/link";
import type { WorkItem } from "@/data/works";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { WorkImageLightbox } from "./WorkImageLightbox";
import { WorksCardGrid } from "./WorksCardGrid";
import styles from "./works.module.css";

type WorkDetailProps = {
  work: WorkItem;
  related?: WorkItem[];
};

export function WorkDetail({ work, related = [] }: WorkDetailProps) {
  return (
    <article className={styles.detail}>
      <p className={styles.detailCategory}>{work.category}</p>
      <h1 className={styles.detailTitle}>{work.title}</h1>
      <p className={styles.detailDesc}>{work.description}</p>

      {work.layout === "beforeAfter" && work.beforeImage && work.afterImage ? (
        <BeforeAfterSlider before={work.beforeImage} after={work.afterImage} />
      ) : null}

      {work.layout === "gallery" && work.images ? (
        <>
          <h2 className={styles.galleryHeading}>施工写真</h2>
          <WorkImageLightbox
            images={work.images}
            className={styles.galleryGrid}
            sizes="(max-width: 640px) 92vw, 420px"
            variant="gallery"
          />
        </>
      ) : null}

      {work.layout === "standard" && work.images ? (
        <WorkImageLightbox
          images={work.images}
          className={styles.standardGrid}
          sizes="(max-width: 768px) 92vw, 840px"
          variant="standard"
        />
      ) : null}

      {related.length > 0 ? (
        <section className={styles.relatedBlock}>
          <h2 className={styles.relatedTitle}>関連する施工事例</h2>
          <WorksCardGrid items={related} showSectionHeader={false} />
        </section>
      ) : null}

      <div className={styles.detailNav}>
        <Link href="/works" className={styles.backLink}>
          施工事例一覧へ戻る
        </Link>
      </div>
    </article>
  );
}
