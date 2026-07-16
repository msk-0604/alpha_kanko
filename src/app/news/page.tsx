import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { newsItems } from "@/data/news";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "お知らせ｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工からのお知らせ一覧。ホームページ公開、設備更新・修繕のご案内、法人向け点検提案などを掲載しています。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "お知らせ" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>NEWS</p>
            <h1 className={styles.pageTitle}>お知らせ</h1>
            <p className={styles.pageLead}>
              株式会社アルファ管工からのお知らせです。
            </p>
          </header>

          <ul className={styles.newsList}>
            {newsItems.map((item) => (
              <li key={item.id}>
                <Link href={`/news/${item.id}`} className={styles.newsLink}>
                  <p className={styles.newsMeta}>
                    <time dateTime={item.date.replace(/\./g, "-")}>{item.date}</time>
                    <span>{item.category}</span>
                  </p>
                  <p className={styles.newsTitle}>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
