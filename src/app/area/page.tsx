import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { areaList } from "@/components/home/content";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "対応エリア｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の対応エリア。滋賀県大津市を中心に、近隣エリアの給排水・配管工事に対応しています。",
  alternates: { canonical: "/area" },
};

export default function AreaPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>AREA</p>
            <h1 className={styles.pageTitle}>対応エリア</h1>
            <p className={styles.pageLead}>
              大津市を拠点に、滋賀県内および近隣エリアの給排水設備工事・修繕に対応しています。
              詳細は現場の場所によりご相談ください。
            </p>
          </header>

          <ul className={styles.simpleList}>
            {areaList.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <p className={styles.pageNote}>
            上記以外のエリアについても、内容によって対応可能な場合があります。お気軽にご相談ください。
          </p>

          <div className={styles.detailNav}>
            <Link href="/contact" className={styles.backLink}>
              ご相談はこちら
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
