import { symptomGroups } from "./content";
import styles from "./home.module.css";

export function SymptomSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="symptoms">
      <div className={styles.container}>
        <h2>こんな症状ありませんか？</h2>
        <p className={styles.sectionIntro}>気になる症状があれば、軽微でも早めのご相談がおすすめです。</p>
        <div className={styles.symptomAccordion}>
          {symptomGroups.map((group) => (
            <details key={group.title} className={styles.symptomItem} open={group.title === "水漏れ"}>
              <summary>{group.title}</summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
