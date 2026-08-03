import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WorksFilter } from "@/components/works/WorksFilter";
import { PageCta } from "@/components/seo/PageCta";
import { getWorks, isMicroCmsEnabled } from "@/lib/works";
import styles from "@/components/works/works.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "施工事例｜漏水・給排水・リフォーム｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の施工事例。漏水調査・漏水修理・排水工事・給排水設備・水回りリフォームの実績をご紹介します。",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "施工事例｜株式会社アルファ管工",
    description:
      "漏水調査・修理、排水工事、給排水設備、リフォームの施工事例。",
    url: "/works",
  },
};

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInner}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "施工事例" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>WORKS</p>
            <h1 className={styles.pageTitle}>施工事例</h1>
            <p className={styles.pageLead}>
              住宅・施設・法人案件など、現場ごとの給排水設備工事の実績です。
              工事種別で絞り込みできます。
            </p>
            {isMicroCmsEnabled ? (
              <p className={styles.cmsNote}>掲載内容は管理画面から随時更新できます。</p>
            ) : null}
          </header>
          <WorksFilter items={works} />
          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
