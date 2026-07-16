import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BeforeAfterSlider } from "@/components/works/BeforeAfterSlider";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "事業内容｜株式会社アルファ管工",
  description:
    "株式会社アルファ管工の事業内容。給排水衛生設備工事、配管工事、排水設備工事、給湯器交換、水回りリフォーム、法人・官公庁対応。",
  alternates: { canonical: "/business" },
};

const overviewPanels = [
  {
    title: "給排水衛生設備工事",
    text: "施設用途に合わせた設計・施工で、安定した給排水環境を構築します。",
    image: "/images/business/sanitary.webp",
    alt: "基礎内に施工した給水・給湯・排水配管",
  },
  {
    title: "配管工事",
    text: "新設・更新・改修まで一貫対応。稼働影響を抑えた施工計画をご提案します。",
    image: "/images/business/piping.webp",
    alt: "壁面に整理された給水・給湯配管ヘッダー",
  },
  {
    title: "法人・官公庁対応",
    text: "工程共有・報告書提出など、施設管理・公共工事の要件に合わせて対応します。",
    image: "/images/business/facility.webp",
    alt: "建物内部の設備配管施工の様子",
  },
];

const beforeAfterPanels = [
  {
    title: "排水設備工事",
    text: "既設排水管の劣化状況を確認し、配管の更新・接続調整を行います。スライダーで施工前後を比べられます。",
    before: {
      src: "/images/business/drain-before.webp",
      alt: "改修前の屋外排水管",
    },
    after: {
      src: "/images/business/drain-after.webp",
      alt: "改修後の屋外排水管",
    },
  },
  {
    title: "給湯器交換工事",
    text: "既設給湯器の撤去から新設接続、安全確認まで一貫して対応します。",
    before: {
      src: "/images/business/heater-before.webp",
      alt: "交換前の給湯器",
    },
    after: {
      src: "/images/business/heater-after.webp",
      alt: "交換後の給湯器",
    },
  },
  {
    title: "水回りリフォーム",
    text: "既設トイレの撤去から新しい洋式トイレへの更新、給排水接続まで対応します。",
    before: {
      src: "/images/business/toilet-before.webp",
      alt: "更新前のトイレ・洗面",
    },
    after: {
      src: "/images/business/toilet-after.webp",
      alt: "更新後のトイレ・洗面まわり",
    },
  },
];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInner}>
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

          <ul className={styles.businessPageGrid}>
            {overviewPanels.map((panel) => (
              <li key={panel.title} className={styles.businessPageCard}>
                <div className={styles.businessPageMedia}>
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={78}
                    className={styles.businessPageImage}
                  />
                </div>
                <div className={styles.businessPageBody}>
                  <h2>{panel.title}</h2>
                  <p>{panel.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <section className={styles.businessBaSection} aria-labelledby="business-ba-title">
            <header className={styles.pageHero}>
              <p className={styles.pageEyebrow}>BEFORE / AFTER</p>
              <h2 id="business-ba-title" className={styles.businessBaHeading}>
                施工前後の例
              </h2>
              <p className={styles.pageLead}>
                排水管・給湯器・トイレなど、更新工事の前後をスライダーでご確認いただけます。
              </p>
            </header>

            <div className={styles.businessBaList}>
              {beforeAfterPanels.map((panel) => (
                <article key={panel.title} className={styles.businessBaCard}>
                  <div className={styles.businessPageBody}>
                    <h3>{panel.title}</h3>
                    <p>{panel.text}</p>
                  </div>
                  <BeforeAfterSlider before={panel.before} after={panel.after} />
                </article>
              ))}
            </div>
          </section>

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
