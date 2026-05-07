import { strengthItems } from "./content";
import styles from "./home.module.css";

export function StrengthSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="strength">
      <div className={styles.container}>
        <h2>選ばれる理由</h2>
        <p className={styles.sectionIntro}>
          技術だけでなく、調整力・報告力・安全意識まで含めて、継続的に選ばれる体制を整えています。
        </p>
        <div className={styles.strengthList}>
          {strengthItems.map((item) => (
            <article key={item} className={styles.strengthItem} data-animate="strength-card">
              <h3>{item}</h3>
              <p>
                現場ごとの課題に向き合い、関係者との連携を重視しながら確実に工事を進めます。
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
