import { WorksCardGrid } from "@/components/works/WorksCardGrid";
import { works } from "@/data/works";
import styles from "./home.module.css";

export function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>
        <WorksCardGrid items={works} />
      </div>
    </section>
  );
}
