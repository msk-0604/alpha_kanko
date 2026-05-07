import { serviceItems } from "./content";
import styles from "./home.module.css";

export function ServiceListSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <h2>サービス内容</h2>
        <p className={styles.sectionIntro}>住まいと施設の水まわりを、点検から施工までワンストップで対応します。</p>
        <div className={styles.serviceGrid}>
          {serviceItems.map((item) => (
            <p key={item} className={styles.serviceItem} data-animate="fade-card">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
