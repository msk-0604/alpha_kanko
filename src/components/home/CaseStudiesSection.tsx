import Image from "next/image";
import { caseStudies } from "./content";
import styles from "./home.module.css";

export function CaseStudiesSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="case-studies">
      <div className={styles.container}>
        <p className={styles.sectionEyebrow}>施工実績</p>
        <h2>事例</h2>
        <p className={styles.sectionIntroCalm}>写真と要点で、現場の雰囲気をお伝えします。</p>
        <div className={styles.caseStudyGrid}>
          {caseStudies.map((item, index) => (
            <article
              key={item.id}
              className={index === 0 ? `${styles.caseStudyItem} ${styles.caseStudyFeatured}` : styles.caseStudyItem}
              data-animate="fade-card"
            >
              <div className={styles.caseStudyVisual}>
                {item.images.length >= 2 ? (
                  <div className={styles.caseBaPhotos}>
                    <figure className={styles.caseBaFigure}>
                      <div className={styles.caseBaImageWrap}>
                        <Image
                          src={item.images[0]}
                          alt={`${item.title}（Before）`}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          loading="lazy"
                        />
                      </div>
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure className={styles.caseBaFigure}>
                      <div className={styles.caseBaImageWrap}>
                        <Image
                          src={item.images[1]}
                          alt={`${item.title}（After）`}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          loading="lazy"
                        />
                      </div>
                      <figcaption>After</figcaption>
                    </figure>
                  </div>
                ) : item.images.length === 1 ? (
                  <div className={styles.caseSinglePhoto}>
                    <div className={styles.caseBaImageWrap}>
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 90vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={styles.caseImageFallback}>施工写真準備中</div>
                )}
              </div>
              <div className={styles.caseStudyCopy}>
                <h3>{item.title}</h3>
                <p className={styles.caseStudySummary}>{item.summary}</p>
                <dl className={styles.caseMetaList}>
                  <div>
                    <dt>エリア</dt>
                    <dd>{item.area}</dd>
                  </div>
                  <div>
                    <dt>工事内容</dt>
                    <dd>{item.category}</dd>
                  </div>
                  <div>
                    <dt>工期</dt>
                    <dd>{item.duration}</dd>
                  </div>
                  <div>
                    <dt>費用目安</dt>
                    <dd>{item.cost}</dd>
                  </div>
                </dl>
                <div className={styles.caseBaNote}>
                  <p>
                    <span>Before</span> {item.before}
                  </p>
                  <p>
                    <span>After</span> {item.after}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
