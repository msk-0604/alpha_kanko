import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/works";
import styles from "./works.module.css";

type WorkDetailProps = {
  work: WorkItem;
};

export function WorkDetail({ work }: WorkDetailProps) {
  return (
    <article className={styles.detail}>
      <p className={styles.detailCategory}>{work.category}</p>
      <h1 className={styles.detailTitle}>{work.title}</h1>
      <p className={styles.detailDesc}>{work.description}</p>

      {work.layout === "beforeAfter" && work.beforeImage && work.afterImage ? (
        <div className={styles.baGrid}>
          <figure className={styles.baFigure}>
            <div className={styles.baImageWrap}>
              <span className={styles.baLabel}>BEFORE</span>
              <Image
                src={work.beforeImage.src}
                alt={work.beforeImage.alt}
                fill
                sizes="(max-width: 768px) 92vw, 440px"
                quality={92}
                className={styles.baImage}
              />
            </div>
          </figure>
          <figure className={styles.baFigure}>
            <div className={styles.baImageWrap}>
              <span className={styles.baLabel}>AFTER</span>
              <Image
                src={work.afterImage.src}
                alt={work.afterImage.alt}
                fill
                sizes="(max-width: 768px) 92vw, 440px"
                quality={92}
                className={styles.baImage}
              />
            </div>
          </figure>
        </div>
      ) : null}

      {work.layout === "gallery" && work.images ? (
        <>
          <h2 className={styles.galleryHeading}>トイレ設備工事</h2>
          <ul className={styles.galleryGrid}>
            {work.images.map((image) => (
              <li key={image.src}>
                <div className={styles.galleryImageWrap}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, 420px"
                    quality={92}
                    className={styles.galleryImage}
                  />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {work.layout === "standard" && work.images ? (
        <ul className={styles.standardGrid}>
          {work.images.map((image) => (
            <li key={image.src}>
              <figure className={styles.photoFigure}>
                <div className={styles.photoStage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={768}
                    sizes="(max-width: 768px) 92vw, 840px"
                    quality={92}
                    className={styles.photoImage}
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>
      ) : null}

      <div className={styles.detailNav}>
        <Link href="/works" className={styles.backLink}>
          施工事例一覧へ戻る
        </Link>
      </div>
    </article>
  );
}
