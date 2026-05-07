import Image from "next/image";
import { caseStudies } from "./content";
import styles from "./home.module.css";

export function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>
        <h2>施工事例</h2>
        <p className={styles.sectionIntro}>
          地域の現場で培った対応力と品質管理で、用途に応じた最適な施工をご提供しています。
        </p>
        <div className={styles.caseStudyScroller}>
          {caseStudies.map((item) => (
            <article key={item.id} className={styles.caseCard} data-animate="fade-card">
              <div className={styles.caseImageWrap}>
                {item.images.length > 0 ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 33vw"
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.caseImageFallback}>施工写真準備中</div>
                )}
              </div>
              <div className={styles.caseBody}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className={styles.caseDetail}>課題：{item.challenge}</p>
                <p className={styles.caseDetail}>工事概要：{item.solution}</p>
                <div className={styles.caseMeta}>
                  <span>対応エリア：{item.area}</span>
                  <span>対応内容：{item.category}</span>
                  <span>工期：{item.duration}</span>
                  <span>費用目安：{item.cost}</span>
                </div>
                <div className={styles.beforeAfterRow}>
                  <span>Before：{item.before}</span>
                  <span>After：{item.after}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
