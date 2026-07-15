import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "採用情報｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の採用情報。滋賀県大津市の給排水・配管工事会社です。ご興味のある方はお問い合わせください。",
  alternates: { canonical: "/recruit" },
};

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>RECRUIT</p>
            <h1 className={styles.pageTitle}>採用情報</h1>
            <p className={styles.pageLead}>
              大津市を拠点に、給排水設備工事・配管工事を行う会社です。
              技術を活かして地域のインフラを支えたい方からのご連絡をお待ちしています。
            </p>
          </header>

          <div className={styles.policyList}>
            <section className={styles.policyItem}>
              <h2>仕事の内容</h2>
              <p>
                住宅・施設などの給排水設備工事、配管工事、修繕・設備更新など。
                新築から既存設備のメンテナンスまで、現場に合わせた施工に携わります。
              </p>
            </section>
            <section className={styles.policyItem}>
              <h2>勤務地</h2>
              <p>滋賀県大津市坂本6丁目8-8（本社）および近隣の施工現場</p>
            </section>
            <section className={styles.policyItem}>
              <h2>お問い合わせ</h2>
              <p>
                募集状況や応募方法は、時期により異なります。
                まずはお電話またはお問い合わせフォームよりご連絡ください。
              </p>
              <p>
                TEL: <a href="tel:0775793507">077-579-3507</a>
              </p>
            </section>
          </div>

          <div className={styles.detailNav}>
            <Link href="/contact" className={styles.backLink}>
              採用について問い合わせる
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
