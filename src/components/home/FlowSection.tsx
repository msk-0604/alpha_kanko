import { flowSteps } from "./content";
import styles from "./home.module.css";

export function FlowSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <h2>ご対応の流れ</h2>
        <p className={styles.sectionIntro}>
          丁寧・迅速に作業を行います。作業完了後、作業内容について分かりやすくご説明いたします。
        </p>
        <div className={styles.flowGrid}>
          {flowSteps.map((step) => (
            <article key={step.title} className={styles.flowCard} data-animate="fade-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
