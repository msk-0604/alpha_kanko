import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { blogPosts } from "@/data/blog";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "ブログ｜漏水・水道工事の情報｜株式会社アルファ管工",
  description:
    "漏水調査、水漏れ修理、配管工事、水回りリフォームに関するお役立ち情報。滋賀県大津市の株式会社アルファ管工。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "ブログ｜株式会社アルファ管工",
    description: "漏水・水道工事・配管に関する情報を発信しています。",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "ブログ" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>BLOG</p>
            <h1 className={styles.pageTitle}>ブログ</h1>
            <p className={styles.pageLead}>
              漏水や水漏れ、配管工事に関する現場目線の情報をまとめています。
            </p>
          </header>

          <ul className={styles.simpleList}>
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span style={{ display: "block", fontSize: "0.78rem", color: "#5c7286" }}>
                    {post.date} ／ {post.category}
                  </span>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
