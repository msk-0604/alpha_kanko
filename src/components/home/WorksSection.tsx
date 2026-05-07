import Image from "next/image";
import { workCategories } from "./content";
import styles from "./home.module.css";

export function WorksSection() {
  return (
    <section className={styles.section} id="works">
      <div className={styles.container}>
        <h2>施工実績</h2>
        <p className={styles.sectionIntro}>
          公共施設から民間設備まで、用途に応じた施工実績を積み重ねています。
        </p>
        <div className={styles.workGrid}>
          {workCategories.map((category, index) => (
            <article key={category} className={styles.workCard} data-animate="work-card">
              <div className={styles.workImageWrap}>
                <Image
                  src={`/images/works/work-${(index % 3) + 1}.svg`}
                  alt={`${category}の施工イメージ`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.workBody}>
                <span className={styles.workTag}>Case Study</span>
                <h3>{category}</h3>
                <p>
                  施工事例写真・工事概要・対応範囲を掲載予定です。ダミー画像は簡単に差し替え可能です。
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
