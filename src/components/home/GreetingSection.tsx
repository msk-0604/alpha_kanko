import Image from "next/image";
import { greeting } from "./content";
import styles from "./home.module.css";

export function GreetingSection() {
  return (
    <section className={styles.section} id="greeting">
      <div className={styles.container}>
        <p className={styles.sectionEyebrow}>ごあいさつ</p>
        <h2>丁寧に、正直に</h2>
        <div className={styles.greetingCard} data-animate="fade-card">
          <div className={styles.greetingImageWrap}>
            <Image
              src={greeting.image}
              alt={`${greeting.name} 代表`}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              loading="lazy"
            />
          </div>
          <div className={styles.greetingBody}>
            <p className={styles.greetingName}>
              <span className={styles.greetingTitle}>{greeting.title}</span>
              {greeting.name}
            </p>
            <p>{greeting.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
