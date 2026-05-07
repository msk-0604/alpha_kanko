import Image from "next/image";
import { greeting } from "./content";
import styles from "./home.module.css";

export function GreetingSection() {
  return (
    <section className={styles.section} id="greeting">
      <div className={styles.container}>
        <h2>代表挨拶</h2>
        <div className={styles.greetingCard} data-animate="fade-card">
          <div className={styles.greetingImageWrap}>
            <Image src={greeting.image} alt={`${greeting.name} 代表写真`} fill sizes="(max-width: 768px) 180px, 240px" loading="lazy" />
          </div>
          <div className={styles.greetingBody}>
            <p className={styles.greetingName}>
              {greeting.title} {greeting.name}
            </p>
            <p>{greeting.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
