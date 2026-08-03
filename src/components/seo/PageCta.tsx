import Link from "next/link";
import styles from "@/components/works/works.module.css";

type PageCtaProps = {
  title?: string;
  lead?: string;
};

export function PageCta({
  title = "ご相談・お見積りはこちら",
  lead = "現場の状況を伺い、調査・修理・工事の内容をご案内します。お急ぎの場合はお電話ください。",
}: PageCtaProps) {
  return (
    <section className={styles.pageCta} aria-labelledby="page-cta-title">
      <h2 id="page-cta-title" className={styles.pageCtaTitle}>
        {title}
      </h2>
      <p className={styles.pageCtaLead}>{lead}</p>
      <div className={styles.pageCtaActions}>
        <a href="tel:0775793507" className={styles.pageCtaPhone}>
          077-579-3507
        </a>
        <Link href="/contact" className={styles.pageCtaButton}>
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
