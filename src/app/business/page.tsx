import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Crosshair,
  Cpu,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BeforeAfterSlider } from "@/components/works/BeforeAfterSlider";
import styles from "@/components/works/works.module.css";

export const metadata: Metadata = {
  title: "事業内容｜滋賀・大津市の管工事・給排水・漏水調査｜株式会社アルファ管工",
  description:
    "滋賀県大津市の株式会社アルファ管工の事業内容。管工事・給排水衛生設備工事、配管工事、排水設備工事、水廻りリフォーム、給湯器交換、水素式非破壊漏水調査、法人・官公庁対応。",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "事業内容｜株式会社アルファ管工",
    description:
      "管工事・給排水設備工事、配管工事、排水設備工事、水廻りリフォーム、漏水調査まで。滋賀県大津市の株式会社アルファ管工。",
    url: "/business",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

type BusinessPanel = {
  title: string;
  text: string;
  image: string;
  alt: string;
  href?: string;
  subtitle?: string;
  imagePosition?: string;
  tags?: string[];
  features?: { label: string; icon: LucideIcon }[];
  /** 併記する補足写真（機材など）。指定するとメイン写真と2枚並びで表示する */
  subImage?: { src: string; alt: string; caption?: string };
};

const overviewPanels: BusinessPanel[] = [
  {
    title: "給排水衛生設備工事",
    text: "施設用途に合わせた設計・施工で、安定した給排水環境を構築します。管工事・配管工事として新設から更新まで対応します。",
    image: "/images/business/sanitary.webp",
    alt: "基礎内に施工した給水・給湯・排水配管",
    href: "/plumbing",
  },
  {
    title: "配管工事",
    text: "新設・更新・改修まで一貫対応。稼働影響を抑えた施工計画をご提案します。",
    image: "/images/business/piping.webp",
    alt: "壁面に整理された給水・給湯配管ヘッダー",
    href: "/plumbing",
  },
  {
    title: "法人・官公庁対応",
    text: "工程共有・報告書提出など、施設管理・公共工事の要件に合わせて対応します。",
    image: "/images/business/facility.webp",
    alt: "建物内部の設備配管施工の様子",
    href: "/company",
  },
  {
    title: "水廻りリフォーム",
    text: "トイレ・キッチン・お風呂など、水廻り設備の更新と給排水接続に対応します。",
    image: "/images/business/remodel.webp",
    alt: "水廻りリフォームの施工イメージ",
    href: "/reform",
  },
  {
    title: "排水桝清掃",
    text: "排水桝内部に蓄積した油脂・汚泥・固形物などを丁寧に除去し、排水経路を清潔な状態に整えます。定期的な清掃により、排水不良や詰まりの予防につながります。",
    image: "/images/business/drain-basin-cleaning.webp",
    alt: "排水桝を高圧洗浄で清掃している作業の様子",
    imagePosition: "50% 42%",
    href: "/drainage",
  },
];

const leakSurveyPanel: BusinessPanel = {
  title: "水素式非破壊漏水調査",
  subtitle: "見えない漏水を、壊さず正確に調査。",
  text: "最新の水素式非破壊漏水調査機器を導入し、戸建住宅・マンション・工場・公共施設・学校など幅広い建物の漏水調査に対応します。配管を壊すことなく漏水箇所を特定できるため、建物への負担を最小限に抑え、迅速かつ正確な調査を行います。",
  image: "/images/business/leak-survey.webp",
  alt: "水素ガス検知器を使った現場での漏水調査",
  href: "/leak-survey",
  subImage: {
    src: "/images/business/leak-survey-device.webp",
    alt: "漏水探索用トレーサーガス発生装置 HT-60",
    caption: "トレーサーガス発生装置 HT-60",
  },
  tags: [
    "戸建住宅",
    "マンション",
    "工場",
    "学校",
    "公共施設",
    "消火設備",
    "上水道",
  ],
  features: [
    { label: "非破壊調査", icon: ShieldCheck },
    { label: "高精度", icon: Crosshair },
    { label: "迅速対応", icon: Zap },
    { label: "最新設備導入", icon: Cpu },
  ],
};

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
    title: "排水桝清掃",
    text: "排水桝内部に蓄積した油脂や汚泥などの堆積物を除去し、排水経路をきれいな状態に清掃しました。定期的な清掃により、排水不良や詰まりの予防につながります。",
    before: {
      src: "/images/business/drain-basin-before.webp",
      alt: "清掃前の排水桝。内部に油脂や汚泥が堆積している状態",
      objectPosition: "54% 48%",
    },
    after: {
      src: "/images/business/drain-basin-after.webp",
      alt: "清掃後の排水桝。内部がきれいになり排水管が見える状態",
      objectPosition: "50% 55%",
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
    title: "水廻りリフォーム",
    text: "トイレ・キッチン・お風呂など、水廻り設備の更新と給排水接続まで対応します。",
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

function BusinessCard({ panel }: { panel: BusinessPanel }) {
  return (
    <li className={styles.businessPageCard}>
      {panel.subImage ? (
        <div className={styles.businessMediaSplit}>
          <div className={styles.businessMediaMain}>
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              quality={78}
              className={styles.businessPageImage}
            />
          </div>
          <figure className={styles.businessMediaSub}>
            <Image
              src={panel.subImage.src}
              alt={panel.subImage.alt}
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              quality={80}
              className={styles.businessSubImage}
            />
            {panel.subImage.caption ? (
              <figcaption>{panel.subImage.caption}</figcaption>
            ) : null}
          </figure>
        </div>
      ) : (
        <div className={styles.businessPageMedia}>
          <Image
            src={panel.image}
            alt={panel.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={78}
            className={styles.businessPageImage}
            style={panel.imagePosition ? { objectPosition: panel.imagePosition } : undefined}
          />
        </div>
      )}
      <div className={styles.businessPageBody}>
        <h2>{panel.title}</h2>
        {panel.subtitle ? (
          <p className={styles.businessPageSubtitle}>{panel.subtitle}</p>
        ) : null}
        <p>{panel.text}</p>
        {panel.tags && panel.tags.length > 0 ? (
          <ul className={styles.businessTagList} aria-label="対応施設">
            {panel.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        {panel.features && panel.features.length > 0 ? (
          <ul className={styles.businessFeatureList} aria-label="特徴">
            {panel.features.map(({ label, icon: Icon }) => (
              <li key={label} className={styles.businessFeatureItem}>
                <span className={styles.businessFeatureIcon} aria-hidden="true">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {panel.href ? (
          <p style={{ marginTop: "0.9rem" }}>
            <Link href={panel.href} className={styles.backLink}>
              詳しく見る
            </Link>
          </p>
        ) : null}
      </div>
    </li>
  );
}

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
              滋賀県大津市を拠点に、管工事・給排水衛生設備工事を中心とした新築・修繕・設備更新まで対応しています。
              住宅から法人・施設案件まで、現場の条件に合わせた施工を行います。
            </p>
          </header>

          <ul className={styles.businessPageGrid}>
            {overviewPanels.map((panel) => (
              <BusinessCard key={panel.title} panel={panel} />
            ))}
            <BusinessCard panel={leakSurveyPanel} />
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
            <Link href="/plumbing" className={styles.backLink}>
              管工事・給排水設備工事を見る
            </Link>
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
