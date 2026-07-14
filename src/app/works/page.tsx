import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WorksCardGrid } from "@/components/works/WorksCardGrid";
import { works } from "@/data/works";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "施工事例｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の施工事例。新築給排水設備工事、給水・給湯配管工事、排水設備工事、給湯器交換、水回りリフォームなどの実績をご紹介します。",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInner}>
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>WORKS</p>
            <h1 className={styles.pageTitle}>施工事例</h1>
            <p className={styles.pageLead}>
              住宅・施設・法人案件など、さまざまな現場の給排水設備工事に対応しています。
              新築設備工事から修繕・設備更新まで、現場の状況に合わせた施工を行っています。
            </p>
          </header>
          <WorksCardGrid items={works} showSectionHeader={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
