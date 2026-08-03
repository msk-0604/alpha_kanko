import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { areaList } from "@/components/home/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { areaCities } from "@/data/areas";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "対応エリア｜滋賀県大津市・草津市ほか｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の対応エリア。大津市・草津市など滋賀県内の漏水調査・水漏れ修理・給排水設備工事に対応します。",
  alternates: { canonical: "/area" },
  openGraph: {
    title: "対応エリア｜株式会社アルファ管工",
    description:
      "大津市・草津市など滋賀県内の漏水調査・給排水工事の対応エリア案内。",
    url: "/area",
  },
};

export default function AreaPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "対応エリア" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>AREA</p>
            <h1 className={styles.pageTitle}>対応エリア</h1>
            <p className={styles.pageLead}>
              大津市を拠点に、滋賀県内および近隣エリアの給排水設備工事・漏水調査・修繕に対応しています。
              市町ごとの案内もご確認ください。
            </p>
          </header>

          <section className={styles.serviceSection}>
            <h2>滋賀県の主な市町</h2>
            <ul className={styles.areaCityGrid}>
              {areaCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/area/${city.slug}`}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.serviceSection}>
            <h2>広域の目安</h2>
            <ul className={styles.simpleList}>
              {areaList.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>

          <p className={styles.pageNote}>
            上記以外のエリアについても、内容によって対応可能な場合があります。お気軽にご相談ください。
          </p>

          <ul className={styles.relatedLinks}>
            <li>
              <Link href="/leak-survey">漏水調査</Link>
            </li>
            <li>
              <Link href="/plumbing">給排水設備工事</Link>
            </li>
            <li>
              <Link href="/works">施工事例</Link>
            </li>
          </ul>

          <PageCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
