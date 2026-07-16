import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAllNewsIds, getNewsById } from "@/data/news";
import styles from "@/components/works/works.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllNewsIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) {
    return { title: "お知らせ｜株式会社アルファ管工" };
  }
  return {
    title: `${item.title}｜お知らせ｜株式会社アルファ管工`,
    description: item.body[0],
    alternates: { canonical: `/news/${item.id}` },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) notFound();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "お知らせ", href: "/news" },
              { label: item.title },
            ]}
          />
          <article>
            <header className={styles.pageHero}>
              <p className={styles.newsMeta}>
                <time dateTime={item.date.replace(/\./g, "-")}>{item.date}</time>
                <span>{item.category}</span>
              </p>
              <h1 className={styles.pageTitle}>{item.title}</h1>
            </header>
            <div className={styles.newsBody}>
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <div className={styles.detailNav}>
            <Link href="/news" className={styles.backLink}>
              お知らせ一覧へ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
