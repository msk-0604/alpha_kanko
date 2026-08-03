import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageCta } from "@/components/seo/PageCta";
import { areaCities, getAllAreaSlugs, getAreaBySlug } from "@/data/areas";
import styles from "@/components/works/works.module.css";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllAreaSlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return { title: "対応エリア｜株式会社アルファ管工" };
  return {
    title: `${area.name}の漏水調査・水道工事｜株式会社アルファ管工`,
    description: area.description,
    alternates: { canonical: `/area/${area.slug}` },
    openGraph: {
      title: `${area.name}の漏水調査・水道工事｜株式会社アルファ管工`,
      description: area.description,
      url: `/area/${area.slug}`,
    },
  };
}

export default async function AreaCityPage({ params }: Props) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageInnerNarrow}>
          <Breadcrumb
            items={[
              { label: "トップ", href: "/" },
              { label: "対応エリア", href: "/area" },
              { label: area.name },
            ]}
          />
          <header className={styles.pageHero}>
            <p className={styles.pageEyebrow}>AREA</p>
            <h1 className={styles.pageTitle}>{area.name}の対応案内</h1>
            <p className={styles.pageLead}>{area.lead}</p>
          </header>

          <section className={styles.serviceSection}>
            <h2>対応内容</h2>
            <ul className={styles.serviceBullets}>
              {area.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.serviceSection}>
            <h2>よくあるご依頼</h2>
            <ul className={styles.serviceBullets}>
              {area.commonRequests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.serviceSection}>
            <h2>施工事例</h2>
            <p>
              {area.name}を含む滋賀県内での工事実績は、施工事例ページでご覧いただけます。
            </p>
            <ul className={styles.relatedLinks}>
              <li>
                <Link href="/works">施工事例一覧</Link>
              </li>
            </ul>
          </section>

          <section className={styles.serviceSection}>
            <h2>関連ページ</h2>
            <ul className={styles.relatedLinks}>
              <li>
                <Link href="/leak-survey">漏水調査</Link>
              </li>
              <li>
                <Link href="/leak-repair">漏水修理</Link>
              </li>
              <li>
                <Link href="/works">施工事例</Link>
              </li>
              <li>
                <Link href="/faq">よくある質問</Link>
              </li>
            </ul>
          </section>

          <p className={styles.pageLead} style={{ marginBottom: "0.75rem" }}>
            その他の市町
          </p>
          <ul className={styles.areaCityGrid}>
            {areaCities
              .filter((item) => item.slug !== area.slug)
              .slice(0, 6)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/area/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
          </ul>

          <PageCta
            title={`${area.name}でのご相談はこちら`}
            lead={`${area.name}の漏水調査・水漏れ修理・給排水工事のご相談を受け付けています。`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
