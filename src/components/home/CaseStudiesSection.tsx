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
                <ul>
                  <li>地域：{item.area}</li>
                  <li>工事内容：{item.category}</li>
                  <li>作業時間：{item.duration}</li>
                  <li>費用目安：{item.cost}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
