import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { strengths } from "@/components/home/content";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "選ばれる理由｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工が選ばれる理由。地域密着、官公庁・法人対応、丁寧な施工と安全管理。",
  alternates: { canonical: "/strength" },
};

const strengthCopy: Record<string, string> = {
  地域密着: "大津市を拠点に、現場の声とスピード感を大切に対応します。",
  官公庁対応: "手続き・工程管理を含め、公共工事に求められる姿勢で向き合います。",
  法人対応: "施設管理者様との連携を前提に、稼働への影響を抑えた施工を行います。",
  修繕対応: "漏水・詰まり・設備不良など、原因確認から再発防止まで対応します。",
  迅速対応: "緊急のご相談にも、状況を伺いながら可能な限り早く手配します。",
  丁寧施工: "見えなくなる部分ほど、接続と仕上げを丁寧に進めます。",
  有資格者対応: "指定工事事業者として、法令と安全管理を徹底します。",
  アフターサポート: "引き渡し後の確認やご相談にも、誠実に対応します。",
};

export default function StrengthPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>STRENGTH</p>
            <h1 className={styles.pageTitle}>選ばれる理由</h1>
            <p className={styles.pageLead}>
              派手な約束ではなく、現場で積み重ねた対応力と施工品質で信頼を築いています。
            </p>
          </header>

          <ol className={styles.numberedList}>
            {strengths.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{item}</h2>
                  <p>{strengthCopy[item] ?? "現場ごとの条件に合わせ、品質と安全を重視して対応します。"}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.detailNav}>
            <Link href="/works" className={styles.backLink}>
              施工事例を見る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
