import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { faqItems } from "@/data/faq";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "よくある質問｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工へのよくある質問。対応工事・対応エリア・見積もり・指定事業者・緊急対応などについてご案内します。",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "よくある質問" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>FAQ</p>
            <h1 className={styles.pageTitle}>よくある質問</h1>
            <p className={styles.pageLead}>
              給排水設備工事に関して、よくいただくご質問をまとめました。
              記載以外のご相談もお気軽にお問い合わせください。
            </p>
          </header>

          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className={styles.detailNav}>
            <Link href="/contact" className={styles.backLink}>
              お問い合わせへ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
