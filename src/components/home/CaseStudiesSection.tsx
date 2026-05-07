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
            <article key={item.title} className={styles.caseCard} data-animate="fade-card">
              <div className={styles.caseImageWrap}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 85vw, 33vw" loading="lazy" />
              </div>
              <div className={styles.caseBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className={styles.caseDetail}>課題：{item.challenge}</p>
                <p className={styles.caseDetail}>対応内容：{item.solution}</p>
                <div className={styles.caseMeta}>
                  <span>対応エリア：{item.area}</span>
                  <span>工事内容：{item.category}</span>
                  <span>作業時間：{item.duration}</span>
                  <span>費用目安：{item.cost}</span>
                </div>
                <div className={styles.beforeAfterRow}>
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
