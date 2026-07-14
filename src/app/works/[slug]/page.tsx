import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WorkDetail } from "@/components/works/WorkDetail";
import { getAllWorkSlugs, getWorkBySlug } from "@/data/works";
import styles from "@/components/works/works.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    return { title: "施工事例｜株式会社アルファ管工" };
  }
  return {
    title: `${work.title}｜施工事例｜株式会社アルファ管工`,
    description: work.description,
    alternates: {
      canonical: `/works/${work.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.detailPage}>
        <div className={styles.detailPageInner}>
          <WorkDetail work={work} />
        </div>
      </main>
      <Footer />
    </>
  );
}
