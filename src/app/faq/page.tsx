import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { faqItems } from "@/data/faq";
import { PageCta } from "@/components/seo/PageCta";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "よくある質問｜漏水調査・水道工事｜株式会社アルファ管工",
  description:
    "滋賀県の漏水調査・水漏れ修理・給排水設備工事に関するよくある質問。大津市の株式会社アルファ管工。",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "よくある質問｜株式会社アルファ管工",
    description:
      "漏水調査・水漏れ修理・給排水設備工事などのよくある質問。",
    url: "/faq",
  },
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
                {item.links && item.links.length > 0 ? (
                  <ul className={styles.relatedLinks} style={{ marginTop: "0.75rem" }}>
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </details>
            ))}
          </div>

          <div className={styles.detailNav}>
            <Link href="/leak-survey" className={styles.backLink}>
              漏水調査を見る
            </Link>
            <Link href="/contact" className={styles.backLink}>
              お問い合わせへ
            </Link>
          </div>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
