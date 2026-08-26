import Link from "next/link";
import type { WorkItem } from "@/data/works";
import { workCategoryToService } from "@/data/works";
import { PageCta } from "@/components/seo/PageCta";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { WorkImageLightbox } from "./WorkImageLightbox";
import { WorksCardGrid } from "./WorksCardGrid";
import styles from "./works.module.css";

type WorkDetailProps = {
  work: WorkItem;
  related?: WorkItem[];
  prev?: WorkItem | null;
  next?: WorkItem | null;
};

export function WorkDetail({
  work,
  related = [],
  prev = null,
  next = null,
}: WorkDetailProps) {
  const serviceHref = workCategoryToService[work.category];

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

      <ul className={styles.relatedLinks} style={{ marginTop: "1.5rem" }}>
        <li>
          <Link href={serviceHref}>{work.category}のサービスを見る</Link>
        </li>
        <li>
          <Link href="/works">施工事例一覧へ</Link>
        </li>
        <li>
          <Link href="/contact">この工事について問い合わせる</Link>
        </li>
      </ul>

      {related.length > 0 ? (
        <section className={styles.relatedBlock}>
          <h2 className={styles.relatedTitle}>関連する施工事例</h2>
          <WorksCardGrid items={related} showSectionHeader={false} />
        </section>
      ) : null}

      <div className={styles.detailNav}>
        {prev ? (
          <Link href={`/works/${prev.slug}`} className={styles.backLink}>
            前の事例
          </Link>
        ) : (
          <Link href="/works" className={styles.backLink}>
            施工事例一覧へ戻る
          </Link>
        )}
        {next ? (
          <Link href={`/works/${next.slug}`} className={styles.backLink}>
            次の事例
          </Link>
        ) : null}
      </div>

      <PageCta />
    </article>
  );
}
