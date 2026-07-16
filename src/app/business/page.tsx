import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "事業内容｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の事業内容。給排水衛生設備工事、配管工事、水道施設工事、修繕・メンテナンス、法人・官公庁対応。",
  alternates: { canonical: "/business" },
};

const panels = [
  {
    title: "給排水衛生設備工事",
    text: "施設用途に合わせた設計・施工で、安定した給排水環境を構築します。",
  },
  {
    title: "配管工事",
    text: "新設・更新・改修まで一貫対応。稼働影響を抑えた施工計画をご提案します。",
  },
  {
    title: "排水設備工事",
    text: "屋外排水管の改修・更新など、排水設備の健全化に対応します。",
  },
  {
    title: "給湯器交換工事",
    text: "既設撤去から新設接続、安全確認までを一貫して実施します。",
  },
  {
    title: "水回りリフォーム",
    text: "トイレ設備更新など、給排水接続を伴うリフォーム工事に対応します。",
  },
  {
    title: "法人・官公庁対応",
    text: "工程共有・報告書提出など、施設管理・公共工事の要件に合わせて対応します。",
  },
];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "事業内容" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>BUSINESS</p>
            <h1 className={styles.pageTitle}>事業内容</h1>
            <p className={styles.pageLead}>
              給排水衛生設備工事を中心に、新築・修繕・設備更新まで対応しています。
              住宅から法人・施設案件まで、現場の条件に合わせた施工を行います。
            </p>
          </header>

          <ol className={styles.businessSimpleList}>
            {panels.map((panel, index) => (
              <li key={panel.title}>
                <span className={styles.businessSimpleIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{panel.title}</h2>
                  <p>{panel.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.detailNav}>
            <Link href="/works" className={styles.backLink}>
              施工事例を見る
            </Link>
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
