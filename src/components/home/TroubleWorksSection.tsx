import { troubleCards } from "./content";
import styles from "./home.module.css";

export function TroubleWorksSection() {
  return (
    <section className={styles.section} id="troubles">
      <div className={styles.container}>
        <h2>主な工事内容</h2>
        <p className={styles.sectionIntro}>
          トイレ・お風呂・キッチンなど、毎日の水まわりトラブルに地域密着で対応しています。
        </p>
        <div className={styles.troubleGrid}>
          {troubleCards.map((card) => (
            <article key={card.title} className={styles.troubleCard} data-animate="fade-card">
              <p className={styles.cardIcon} aria-hidden="true">
                {card.icon}
              </p>
              <h3>{card.title}</h3>
              <p className={styles.troubleSummary}>{card.summary}</p>
              <ul>
                {card.troubles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {card.others ? <p className={styles.troubleOther}>その他：{card.others.join(" / ")}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
