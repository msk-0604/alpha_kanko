import { disclosureItems } from "./content";
import styles from "./home.module.css";

export function DisclosureSection() {
  return (
    <section className={styles.section} id="disclosure">
      <div className={styles.container}>
        <h2>アルファ管工が持っている許認可・事業免許</h2>
        <p className={styles.sectionIntro}>
          許認可・施工体制・安全管理に関する情報を公開し、透明性ある企業運営を行います。
        </p>
        <div className={styles.strengthList}>
          {disclosureItems.map((item) => (
            <article key={item} className={styles.strengthItem} data-animate="strength-card">
              <h3>{item}</h3>
              <p>更新情報は随時掲載し、関係者の皆さまに分かりやすくお伝えします。</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
