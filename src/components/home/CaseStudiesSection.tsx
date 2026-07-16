import { WorksCardGrid } from "@/components/works/WorksCardGrid";
import { getWorks } from "@/lib/works";
import styles from "./home.module.css";

export async function CaseStudiesSection() {
  const works = await getWorks();

  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>
        <WorksCardGrid items={works.slice(0, 3)} />
      </div>
    </section>
  );
}
