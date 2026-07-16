import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { greeting } from "@/components/home/content";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "会社案内｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の会社案内。創業平成3年、大津市指定給水・排水設備工事事業者として地域の給排水設備を支えています。",
  alternates: { canonical: "/company" },
};

const rows = [
  { label: "会社名", value: "株式会社アルファ管工" },
  { label: "代表者", value: "山口 豊樹" },
  { label: "所在地", value: "滋賀県大津市坂本6丁目8-8" },
  { label: "電話", value: "077-579-3507", href: "tel:0775793507" },
  { label: "E-mail", value: "honsha@alpha-kanko.co.jp", href: "mailto:honsha@alpha-kanko.co.jp" },
  { label: "創業", value: "平成3年" },
  {
    label: "事業内容",
    value: "一般住宅の水道、排水等の配管工事及び水まわりのリフォーム工事（給排水設備工事）",
  },
  {
    label: "指定番号",
    value:
      "大津市指定給水装置工事事業者（第192号）／大津市指定排水設備工事事業者（第192号）",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "会社案内" },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>COMPANY</p>
            <h1 className={styles.pageTitle}>会社案内</h1>
            <p className={styles.pageLead}>
              創業平成3年。大津市指定の給水・排水設備工事事業者として、
              地域の暮らしとインフラを支える施工を積み重ねています。
            </p>
          </header>

          <section className={styles.companyGreetingTeaser}>
            <p className={styles.companyGreetingEyebrow}>代表挨拶</p>
            <p className={styles.companyGreetingQuote}>
              私たちは、地域の暮らしを支える水まわり設備を守ることを使命としています。
            </p>
            <p className={styles.companyGreetingName}>
              {greeting.title} {greeting.name}
            </p>
            <Link href="/greeting" className={styles.backLink}>
              代表挨拶を読む
            </Link>
          </section>

          <dl className={styles.companyTable}>
            {rows.map((row) => (
              <div key={row.label} className={styles.companyRow}>
                <dt>{row.label}</dt>
                <dd>
                  {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className={styles.detailNav}>
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
