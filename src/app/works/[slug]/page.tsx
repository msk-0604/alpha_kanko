import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WorkDetail } from "@/components/works/WorkDetail";
import { getAllWorkSlugs, getRelatedWorks, getWorkBySlug } from "@/lib/works";
import styles from "@/components/works/works.module.css";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) {
    return { title: "施工事例｜株式会社アルファ管工" };
  }
  return {
    title: `${work.title}｜施工事例｜株式会社アルファ管工`,
    description: work.description,
    alternates: {
      canonical: `/works/${work.slug}`,
    },
    openGraph: {
      title: `${work.title}｜施工事例｜株式会社アルファ管工`,
      description: work.description,
      images: [{ url: work.coverImage.src }],
    },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) {
    notFound();
  }

  const related = await getRelatedWorks(work.slug, 3);

  return (
    <>
      <Header />
      <main className={styles.detailPage}>
        <div className={styles.detailPageInner}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "施工事例", href: "/works" },
              { label: work.title },
            ]}
          />
          <WorkDetail work={work} related={related} />
        </div>
      </main>
      <Footer />
    </>
  );
}
